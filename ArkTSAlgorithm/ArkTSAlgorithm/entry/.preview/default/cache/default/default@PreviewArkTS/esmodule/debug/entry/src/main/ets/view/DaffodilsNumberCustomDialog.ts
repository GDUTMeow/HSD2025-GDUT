if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DaffodilsNumberCustomDialog_Params {
    IsPalindromicStringCustomDialogController?: CustomDialogController;
}
import { CommonConstants } from "@bundle:com.example.arktsalgorithm/entry/ets/common/constants/Constants";
import { daffodilsNumber } from "@bundle:com.example.arktsalgorithm/entry/ets/common/utils/Method";
export class DaffodilsNumberCustomDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.IsPalindromicStringCustomDialogController = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DaffodilsNumberCustomDialog_Params) {
        if (params.IsPalindromicStringCustomDialogController !== undefined) {
            this.IsPalindromicStringCustomDialogController = params.IsPalindromicStringCustomDialogController;
        }
    }
    updateStateVars(params: DaffodilsNumberCustomDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private IsPalindromicStringCustomDialogController?: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.IsPalindromicStringCustomDialogController = ctr;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/DaffodilsNumberCustomDialog.ets(24:5)", "entry");
            Column.alignItems(HorizontalAlign.Center);
            Column.padding({
                left: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" },
                right: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" },
                bottom: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/DaffodilsNumberCustomDialog.ets(25:7)", "entry");
            Column.alignItems(HorizontalAlign.Center);
            Column.width(CommonConstants.PERCENT_FULL);
            Column.height({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/DaffodilsNumberCustomDialog.ets(26:9)", "entry");
            Text.height({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.font({ size: { "id": 125829676, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
            Text.fontColor({ "id": 125829210, "type": 10001, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/DaffodilsNumberCustomDialog.ets(31:9)", "entry");
            Text.font({ size: { "id": 125829685, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
            Text.fontColor({ "id": 125829216, "type": 10001, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.margin({ left: { "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(daffodilsNumber().toString());
            Text.debugLine("entry/src/main/ets/view/DaffodilsNumberCustomDialog.ets(40:7)", "entry");
            Text.font({ size: { "id": 125829684, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
            Text.fontColor({ "id": 125829210, "type": 10001, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
