import { Color, ImageSource, Utils } from '@nativescript/core';

import { CollectionView } from '@nstudio/ui-collectionview';

import { SwipeResult } from '@src/app/core/services/ui/interfaces/swipe-result.interface';

import GridLayoutManager = androidx.recyclerview.widget.GridLayoutManager;
import ItemTouchHelper = androidx.recyclerview.widget.ItemTouchHelper;
import BitmapDrawable = android.graphics.drawable.BitmapDrawable;
import GradientDrawable = android.graphics.drawable.GradientDrawable;
import Paint = android.graphics.Paint;
import RecyclerView = androidx.recyclerview.widget.RecyclerView;
import Canvas = android.graphics.Canvas;

@NativeClass()
class SwipeCallback extends ItemTouchHelper.SimpleCallback {
    owner!: WeakRef<CollectionView>;

    mClearPaint: Paint;
    mBackgroundDelete: GradientDrawable;
    deleteBackgroundColor: number;
    deleteDrawable: BitmapDrawable;
    deleteIconSize: { width: number; height: number };
    mBackgroundEdit: GradientDrawable;
    editBackgroundColor: number;
    editDrawable: BitmapDrawable;
    editIconSize: { width: number; height: number };
    swipeIndex!: number;
    removing = false;
    swipeFinishedCallback!: (swipeResult: SwipeResult) => void;

    static initWithOwner(owner: WeakRef<CollectionView>, swipeFinishedCallback: (swipeResult: SwipeResult) => void) {
        const swipe = new SwipeCallback(
            ItemTouchHelper.UP |
            ItemTouchHelper.DOWN |
            ItemTouchHelper.START |
            ItemTouchHelper.END,
            ItemTouchHelper.LEFT
        );
        swipe.owner = owner;
        swipe.swipeFinishedCallback = swipeFinishedCallback; // Save the callback function

        return swipe;
    }

    /**
     *
     * @param dragDirs
     * @param swipeDirs
     */
    constructor(dragDirs: number, swipeDirs: number) {
        super(dragDirs, swipeDirs);

        this.mClearPaint = new Paint();
        this.mClearPaint.setXfermode(
            new android.graphics.PorterDuffXfermode(
                android.graphics.PorterDuff.Mode.CLEAR
            )
        );

        this.mBackgroundDelete = new GradientDrawable();
        this.deleteBackgroundColor = new Color('#f44336').android;
        const deleteImg = ImageSource.fromFileOrResourceSync('res://ic_delete_forever');
        this.deleteDrawable = new BitmapDrawable(
            Utils.android.getResources(),
            deleteImg.android
        );
        this.deleteIconSize = {
            width: deleteImg.width,
            height: deleteImg.height,
        };

        this.mBackgroundEdit = new GradientDrawable();
        this.editBackgroundColor = new Color('#4caf50').android;
        const editImg = ImageSource.fromFileOrResourceSync('res://ic_edit_note');
        this.editDrawable = new BitmapDrawable(
            Utils.android.getResources(),
            editImg.android
        );
        this.editIconSize = {
            width: editImg.width,
            height: editImg.height,
        };

        return global.__native(this);
    }

    /**
     *
     * @param recyclerView
     * @param viewHolder
     */
    getMovementFlags(recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder) {
        this.swipeIndex = viewHolder.getAdapterPosition();
        return ItemTouchHelper.SimpleCallback.makeMovementFlags(
            0,
            ItemTouchHelper.RIGHT | ItemTouchHelper.LEFT
        );
    }

    /**
     * Would be used for drag & drop
     *
     * @param recyclerview
     * @param viewHolder
     * @param target
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onMove(recyclerview: RecyclerView, viewHolder: RecyclerView.ViewHolder, target: RecyclerView.ViewHolder): boolean {
        return false;
    }

    /**
     *
     * @param c
     * @param recyclerView
     * @param viewHolder
     * @param dX
     * @param dY
     * @param actionState
     * @param isCurrentlyActive
     */
    public onChildDraw(c: Canvas, recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void {
        super.onChildDraw(
            c,
            recyclerView,
            viewHolder,
            dX,
            dY,
            actionState,
            isCurrentlyActive
        );

        const itemView = viewHolder.itemView;
        const itemHeight = itemView.getHeight();
        const itemWidth = itemView.getWidth();

        const isCancelled = dX == 0 && !isCurrentlyActive;

        if (isCancelled) {
            this.clearCanvas(
                c,
                itemView.getRight() + dX,
                itemView.getTop(),
                itemView.getRight(),
                itemView.getBottom()
            );
            super.onChildDraw(
                c,
                recyclerView,
                viewHolder,
                dX,
                dY,
                actionState,
                isCurrentlyActive
            );
            return;
        }

        if (dX < 0) { // we are swiping left

            this.mBackgroundEdit.setColor(this.editBackgroundColor);
            // Rect(int left, int top, int right, int bottom)
            this.mBackgroundEdit.setBounds(
                itemView.getRight() + dX,
                itemView.getTop() + 8, // why 8 here and 16 for right? _shrug_
                itemView.getRight() - 8,
                itemView.getBottom() - 8
            );
            this.mBackgroundEdit.setCornerRadius(24);
            this.mBackgroundEdit.draw(c);

            const editIconTop =
                itemView.getTop() + (itemHeight - this.editIconSize.height) / 2;
            const editIconMargin = itemWidth / 8;
            const editIconLeft = itemView.getRight() - editIconMargin - this.editIconSize.width;
            const editIconRight = itemView.getRight() - editIconMargin;
            const editIconBottom = editIconTop + this.editIconSize.height;

            this.editDrawable.setBounds(
                editIconLeft,
                editIconTop,
                editIconRight,
                editIconBottom
            );
            this.editDrawable.draw(c);

        } else if (dX > 0) {

            // we are swiping right
            this.mBackgroundDelete.setColor(this.deleteBackgroundColor);
            this.mBackgroundDelete.setBounds(
                itemView.getLeft() + 8,
                itemView.getTop() + 8,
                itemView.getLeft() + dX,
                itemView.getBottom() - 8
            );
            this.mBackgroundDelete.setCornerRadius(24);
            this.mBackgroundDelete.draw(c);

            const deleteIconTop =
                itemView.getTop() + (itemHeight - this.deleteIconSize.height) / 2;
            const deleteIconMargin = itemWidth / 8;
            const deleteIconLeft = itemView.getLeft() + deleteIconMargin;
            const deleteIconRight = itemView.getLeft() + deleteIconMargin + this.deleteIconSize.width;
            const deleteIconBottom = deleteIconTop + this.deleteIconSize.height;

            this.deleteDrawable.setBounds(
                deleteIconLeft,
                deleteIconTop,
                deleteIconRight,
                deleteIconBottom
            );
            this.deleteDrawable.draw(c);
        }
    }

    /**
     *
     * @param c
     * @param left
     * @param top
     * @param right
     * @param bottom
     */
    clearCanvas(c: android.graphics.Canvas, left: number, top: number, right: number, bottom: number) {
        if (!this.removing) {
            c.drawRect(left, top, right, bottom, this.mClearPaint);
        }
    }

    /**
     *
     * @param viewHolder
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getSwipeThreshold(viewHolder: RecyclerView.ViewHolder) {
        return 0.5;
    }

    /**
     *
     * @param viewHolder
     * @param direction
     */
    onSwiped(viewHolder: RecyclerView.ViewHolder, direction: number) {
        const owner = this.owner?.deref();
        if (owner) {
            this.removing = true;

            const swipeResult = {index: this.swipeIndex, leftThresholdPassed: false, rightThresholdPassed: false};
            switch (direction) {
                case ItemTouchHelper.RIGHT:
                    swipeResult.leftThresholdPassed = true;
                    break;
                case ItemTouchHelper.LEFT:
                    swipeResult.rightThresholdPassed = true;
                    break;
            }
            this.swipeFinishedCallback(swipeResult);
        }
    }
}

/**
 *
 * @param view
 * @param swipeFinishedCallback
 */
export function createLayout(view: CollectionView, swipeFinishedCallback: (swipeResult: SwipeResult) => void) {
    const recyclerView = <RecyclerView>view.nativeView;
    const itemTouchHelper = new ItemTouchHelper(SwipeCallback.initWithOwner(
        new WeakRef(view), swipeFinishedCallback
    ));
    itemTouchHelper.attachToRecyclerView(recyclerView);

    return new GridLayoutManager(Utils.android.getApplicationContext(), 1);
}
