import { CollectionView } from '@nstudio/ui-collectionview';

import { SwipeResult } from '@src/app/core/services/ui/interfaces/swipe-result.interface';

export function createLayout(collectionView: CollectionView, swipeFinishedCallback: (swipeResult: SwipeResult) => void) {
    const config = UICollectionLayoutListConfiguration.alloc().initWithAppearance(
        UICollectionLayoutListAppearance.Plain
    );
    config.backgroundColor = UIColor.clearColor;
    config.showsSeparators = false;

    config.trailingSwipeActionsConfigurationProvider = (p1: NSIndexPath) => {

        const editAction =
            UIContextualAction.contextualActionWithStyleTitleHandler(
                UIContextualActionStyle.Normal,
                ' ',
                (
                    action: UIContextualAction,
                    sourceView: UIView,
                    actionPerformed: (p1: boolean) => void
                ) => {
                    actionPerformed(true);
                    const swipeResult = {index: p1.row, leftThresholdPassed: false, rightThresholdPassed: true};
                    swipeFinishedCallback(swipeResult);
                }
            );
        editAction.backgroundColor = UIColor.systemGreenColor;
        editAction.image = UIImage.systemImageNamed('pencil');

        return UISwipeActionsConfiguration.configurationWithActions([
            editAction
        ]);
    };

    config.leadingSwipeActionsConfigurationProvider = (p1: NSIndexPath) => {
        const deleteAction = UIContextualAction.contextualActionWithStyleTitleHandler(
            UIContextualActionStyle.Normal,
            ' ',
            (
                action: UIContextualAction,
                sourceView: UIView,
                actionPerformed: (p1: boolean) => void
            ) => {
                actionPerformed(true);
                const swipeResult = {index: p1.row, leftThresholdPassed: true, rightThresholdPassed: false};
                swipeFinishedCallback(swipeResult);
            }
        );
        deleteAction.backgroundColor = UIColor.systemRedColor;
        deleteAction.image = UIImage.systemImageNamed('trash');
        return UISwipeActionsConfiguration.configurationWithActions([
            deleteAction
        ]);
    };

    return UICollectionViewCompositionalLayout.layoutWithListConfiguration(
        config
    );
}
