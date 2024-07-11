import {
    CoreEditorApp,
    addBasePlugins,
    addEditorPlugins,
    AssetManagerBasicPopupPlugin,
    CanvasSnipperPlugin,
    FileTransferPlugin
} from "webgi";
import "./styles.css";

async function setupViewer() {
    // Initialize the CoreEditorApp
    const editor = new CoreEditorApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
    });

    // Add base plugins
    await addBasePlugins(editor);

    // Add a popup (in HTML) with download progress when any asset is downloading
    await editor.addPlugin(AssetManagerBasicPopupPlugin);

    // Required for downloading files from the UI
    await editor.addPlugin(FileTransferPlugin);

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas
    await editor.addPlugin(CanvasSnipperPlugin);

     // remove extras tab
    editor.defaultModes = editor.defaultModes.filter((m) => m.title !== "Extras");

    // Add default editor plugins
    await addEditorPlugins(editor, {
        caching: true,
        ground: true,
        bloom: true,
        depthTonemap: true,
        enableDrop: true,
        importPopup: false,
        debug: false
    });

    // Load an environment map
    //await editor.setEnvironmentMap("https://dist.pixotronics.com/webgi/assets/hdr/gem_2.hdr");



    // Setup editor UI
    await editor.setupUi();

    // Optional: Add some custom UI for tweak and testing
    // const uiPlugin = await editor.addPlugin(TweakpaneUiPlugin);
    // uiPlugin.setupPlugins<IViewerPlugin>(TonemapPlugin, CanvasSnipperPlugin);
}

setupViewer();
