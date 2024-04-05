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
- Check out the issue related branch (if available)
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
- Repeat those steps until it crashes - sometimes it's happening on 2nd iteration, sometimes it takes a longer

Log:
```
System.err: An uncaught Exception occurred on "main" thread.
  System.err: Attempt to use cleared object reference id=8854
  System.err:
  System.err: StackTrace:
  System.err: com.tns.NativeScriptException: Attempt to use cleared object reference id=8854
  System.err: 	at com.tns.Runtime.getJavaObjectByID(Runtime.java:1076)
  System.err: 	at com.tns.Runtime.callJSMethodNative(Native Method)
  System.err: 	at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1301)
  System.err: 	at com.tns.Runtime.callJSMethodImpl(Runtime.java:1187)
  System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:1174)
  System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:1152)
  System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:1148)
  System.err: 	at androidx.recyclerview.widget.ItemTouchHelper_SimpleCallback_ts_199_28_SwipeCallback.onChildDraw(Unknown Source:54)
  System.err: 	at androidx.recyclerview.widget.ItemTouchHelper$Callback.onDraw(ItemTouchHelper.java:1989)
  System.err: 	at androidx.recyclerview.widget.ItemTouchHelper.onDraw(ItemTouchHelper.java:561)
  System.err: 	at androidx.recyclerview.widget.RecyclerView.onDraw(RecyclerView.java:4494)
  System.err: 	at android.view.View.draw(View.java:23889)
  System.err: 	at androidx.recyclerview.widget.RecyclerView.draw(RecyclerView.java:4429)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22756)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ViewGroup.recreateChildDisplayList(ViewGroup.java:4540)
  System.err: 	at android.view.ViewGroup.dispatchGetDisplayList(ViewGroup.java:4513)
  System.err: 	at android.view.View.updateDisplayListIfDirty(View.java:22712)
  System.err: 	at android.view.ThreadedRenderer.updateViewTreeDisplayList(ThreadedRenderer.java:694)
  System.err: 	at android.view.ThreadedRenderer.updateRootDisplayList(ThreadedRenderer.java:700)
  System.err: 	at android.view.ThreadedRenderer.draw(ThreadedRenderer.java:798)
  System.err: 	at android.view.ViewRootImpl.draw(ViewRootImpl.java:4939)
  System.err: 	at android.view.ViewRootImpl.performDraw(ViewRootImpl.java:4643)
  System.err: 	at android.view.ViewRootImpl.performTraversals(ViewRootImpl.java:3822)
  System.err: 	at android.view.ViewRootImpl.doTraversal(ViewRootImpl.java:2465)
  System.err: 	at android.view.ViewRootImpl$TraversalRunnable.run(ViewRootImpl.java:9305)
  System.err: 	at android.view.Choreographer$CallbackRecord.run(Choreographer.java:1339)
  System.err: 	at android.view.Choreographer$CallbackRecord.run(Choreographer.java:1348)
  System.err: 	at android.view.Choreographer.doCallbacks(Choreographer.java:952)
  System.err: 	at android.view.Choreographer.doFrame(Choreographer.java:882)
  System.err: 	at android.view.Choreographer$FrameDisplayEventReceiver.run(Choreographer.java:1322)
  System.err: 	at android.os.Handler.handleCallback(Handler.java:958)
  System.err: 	at android.os.Handler.dispatchMessage(Handler.java:99)
  System.err: 	at android.os.Looper.loopOnce(Looper.java:205)
  System.err: 	at android.os.Looper.loop(Looper.java:294)
  System.err: 	at android.app.ActivityThread.main(ActivityThread.java:8177)
  System.err: 	at java.lang.reflect.Method.invoke(Native Method)
  System.err: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:552)
  System.err: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:971)
```
