if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface StandingsCustomDialog_Params {
    content?: string;
    result?: string;
    IsPalindromicStringCustomDialogController?: CustomDialogController;
}
import { CommonConstants } from "@bundle:com.example.arktsalgorithm/entry/ets/common/constants/Constants";
import CommonUtils from "@bundle:com.example.arktsalgorithm/entry/ets/common/utils/CommonUtils";
import { getStandings } from "@bundle:com.example.arktsalgorithm/entry/ets/common/utils/Method";
export class StandingsCustomDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__content = new ObservedPropertySimplePU('', this, "content");
        this.__result = new ObservedPropertySimplePU('', this, "result");
        this.IsPalindromicStringCustomDialogController = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: StandingsCustomDialog_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.result !== undefined) {
            this.result = params.result;
        }
        if (params.IsPalindromicStringCustomDialogController !== undefined) {
            this.IsPalindromicStringCustomDialogController = params.IsPalindromicStringCustomDialogController;
        }
    }
    updateStateVars(params: StandingsCustomDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__content.purgeDependencyOnElmtId(rmElmtId);
        this.__result.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__content.aboutToBeDeleted();
        this.__result.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __content: ObservedPropertySimplePU<string>;
    get content() {
        return this.__content.get();
    }
    set content(newValue: string) {
        this.__content.set(newValue);
    }
    private __result: ObservedPropertySimplePU<string>;
    get result() {
        return this.__result.get();
    }
    set result(newValue: string) {
        this.__result.set(newValue);
    }
    private IsPalindromicStringCustomDialogController?: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.IsPalindromicStringCustomDialogController = ctr;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/StandingsCustomDialog.ets(29:5)", "entry");
            Column.alignItems(HorizontalAlign.Center);
            Column.padding({
                left: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" },
                right: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/StandingsCustomDialog.ets(30:7)", "entry");
            Column.alignItems(HorizontalAlign.Center);
            Column.width(CommonConstants.PERCENT_FULL);
            Column.height({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/StandingsCustomDialog.ets(31:9)", "entry");
            Text.height({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.font({ size: { "id": 125829676, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
            Text.fontColor({ "id": 125829210, "type": 10001, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/StandingsCustomDialog.ets(36:9)", "entry");
            Text.font({ size: { "id": 125829685, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
            Text.fontColor({ "id": 125829216, "type": 10001, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.margin({ left: { "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: CommonConstants.INTEGER_INPUT });
            TextInput.debugLine("entry/src/main/ets/view/StandingsCustomDialog.ets(45:7)", "entry");
            TextInput.margin({ top: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
            TextInput.height({ "id": 16777245, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            TextInput.showUnderline(true);
            TextInput.onChange((value: string) => {
                this.content = value;
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Button.debugLine("entry/src/main/ets/view/StandingsCustomDialog.ets(52:7)", "entry");
            Button.width({ "id": 16777243, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Button.margin({
                top: { "id": 16777240, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" },
                bottom: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" }
            });
            Button.onClick(() => {
                // this.result = stringReversal(this.content);
                this.result = getStandings(Number.parseInt(this.content)).toString();
                CommonUtils.showToast(CommonConstants.STRING_STANDINGS + this.result);
            });
        }, Button);
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
