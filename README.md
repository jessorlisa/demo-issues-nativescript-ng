# demo-issues-nativescript-ng

Demo project source for issues related to NativeScript (Angular flavour)

## Environment

- Node.js: v20.11.1
- Android SDK: 34
- JDK 11
- Xcode: 15.0.1
- CocoaPods 1.15.2
- CLI: `nativescript@8.6.5`
- Cross-platform modules: `@nativescript/core@8.6.2`
- Android Runtime: `@nativescript/android@8.6.2`
- iOS Runtime: `@nativescript/ios@8.6.4`
- Angular: `@angular/core@17.3.3`

## Setup

- `npm -g install nativescript@8.6.5`
- Clone the demo project
- `npm run clean`
- Run the project:
    - `npm run android` / `npm run ios`

## Issue Description & Reproduction
This project implements Swipe for CollectionView following @wwwalkerrun 's approach: https://blog.nativescript.org/collectionview-power-part2/
After a few swipes, and forward backwards navigation the app crashes, see below.

To reproduce:
- Click "'Demo CollectionView'"
- Swipe right
- Swipe left to navigate away
- Navigate back
- Repeat those steps until it crashes - sometimes it's happening on 2nd iteration, sometimes it takes a few more rounds.

Log:
```
An uncaught Exception occurred on "main" thread.
Calling js method onChildDraw failed
Error: JNI Exception occurred (SIGABRT).
=======
Check the 'adb logcat' for additional information about the error.
=======
StackTrace:
SwipeCallback.onChildDraw(file:///data/data/dev.jessorlisa.demoissuesn8ng12/files/app/src_app_features_search_search_module_ts.js:272:34)
	at com.tns.Runtime.callJSMethodNative(Native Method)
	at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1301)
	at com.tns.Runtime.callJSMethodImpl(Runtime.java:1187)
	at com.tns.Runtime.callJSMethod(Runtime.java:1174)
	at com.tns.Runtime.callJSMethod(Runtime.java:1152)
	at com.tns.Runtime.callJSMethod(Runtime.java:1148)
	at androidx.recyclerview.widget.ItemTouchHelper_SimpleCallback_ts_199_28_SwipeCallback.onChildDraw(Unknown Source:54)
	at androidx.recyclerview.widget.ItemTouchHelper$Callback.onDraw(ItemTouchHelper.java:1989)
	at androidx.recyclerview.widget.ItemTouchHelper.onDraw(ItemTouchHelper.java:561)
	at androidx.recyclerview.widget.RecyclerView.onDraw(RecyclerView.java:4494)
	at android.view.View.draw(View.java:24190)
	at androidx.recyclerview.widget.RecyclerView.draw(RecyclerView.java:4429)
	at android.view.View.updateDisplayListIfDirty(View.java:23056)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4550)
	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4523)
	at android.view.View.updateDisplayListIfDirty(View.java:23012)
	at android.view.ThreadedRenderer.updateViewTreeDisplayList(ThreadedRenderer.java:694)
	at android.view.ThreadedRenderer.updateRootDisplayList(ThreadedRenderer.java:700)
	at android.view.ThreadedRenderer.draw(ThreadedRenderer.java:798)
	at android.view.ViewRootImpl.draw(ViewRootImpl.java:5234)
	at android.view.ViewRootImpl.performDraw(ViewRootImpl.java:4900)
	at android.view.ViewRootImpl.performTraversals(ViewRootImpl.java:4049)
	at android.view.ViewRootImpl.doTraversal(ViewRootImpl.java:2659)
	at android.view.ViewRootImpl$TraversalRunnable.run(ViewRootImpl.java:9789)
	at android.view.Choreographer$CallbackRecord.run(Choreographer.java:1399)
	at android.view.Choreographer$CallbackRecord.run(Choreographer.java:1408)
	at android.view.Choreographer.doCallbacks(Choreographer.java:1008)
	at android.view.Choreographer.doFrame(Choreographer.java:938)
	at android.view.Choreographer$FrameDisplayEventReceiver.run(Choreographer.java:1382)
	at android.os.Handler.handleCallback(Handler.java:959)
	at android.os.Handler.dispatchMessage(Handler.java:100)
	at android.os.Looper.loopOnce(Looper.java:232)
	at android.os.Looper.loop(Looper.java:317)
	at android.app.ActivityThread.main(ActivityThread.java:8501)
	at java.lang.reflect.Method.invoke(Native Method)
	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:552)
	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:878)
```
