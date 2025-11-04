if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    daffodilsNumberCustomDialogController?: CustomDialogController | null;
    // multiplicationTableCustomDialogController: CustomDialogController | null = new CustomDialogController({
    //   builder: MultiplicationTableCustomDialog(),
    //   alignment: DialogAlignment.Center,
    //   offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
    // });
    // isPalindromicStringCustomDialogController: CustomDialogController | null = new CustomDialogController({
    //   builder: IsPalindromicStringCustomDialog(),
    //   alignment: DialogAlignment.Center,
    //   offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
    // });
    standingCustomDialogController?: CustomDialogController | null;
}
import { CommonConstants } from "@bundle:com.example.arktsalgorithm/entry/ets/common/constants/Constants";
import { DaffodilsNumberCustomDialog } from "@bundle:com.example.arktsalgorithm/entry/ets/view/DaffodilsNumberCustomDialog";
import { StandingsCustomDialog } from "@bundle:com.example.arktsalgorithm/entry/ets/view/StandingsCustomDialog";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.daffodilsNumberCustomDialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new DaffodilsNumberCustomDialog(this, {}, undefined, -1, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 29, col: 14 });
                jsDialog.setController(this.daffodilsNumberCustomDialogController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {};
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            alignment: DialogAlignment.Center,
            offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
        }, this);
        this.standingCustomDialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new StandingsCustomDialog(this, {}, undefined, -1, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 44, col: 14 });
                jsDialog.setController(this.
                // multiplicationTableCustomDialogController: CustomDialogController | null = new CustomDialogController({
                //   builder: MultiplicationTableCustomDialog(),
                //   alignment: DialogAlignment.Center,
                //   offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
                // });
                // isPalindromicStringCustomDialogController: CustomDialogController | null = new CustomDialogController({
                //   builder: IsPalindromicStringCustomDialog(),
                //   alignment: DialogAlignment.Center,
                //   offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
                // });
                standingCustomDialogController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {};
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            alignment: DialogAlignment.Center,
            offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
        }, this);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.daffodilsNumberCustomDialogController !== undefined) {
            this.daffodilsNumberCustomDialogController = params.daffodilsNumberCustomDialogController;
        }
        if (params.standingCustomDialogController !== undefined) {
            this.standingCustomDialogController = params.standingCustomDialogController;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private daffodilsNumberCustomDialogController: CustomDialogController | null;
    // multiplicationTableCustomDialogController: CustomDialogController | null = new CustomDialogController({
    //   builder: MultiplicationTableCustomDialog(),
    //   alignment: DialogAlignment.Center,
    //   offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
    // });
    // isPalindromicStringCustomDialogController: CustomDialogController | null = new CustomDialogController({
    //   builder: IsPalindromicStringCustomDialog(),
    //   alignment: DialogAlignment.Center,
    //   offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
    // });
    private standingCustomDialogController: CustomDialogController | null;
    // isLeapYearCustomDialogController: CustomDialogController | null = new CustomDialogController({
    //   builder: IsLeapYearCustomDialog(),
    //   alignment: DialogAlignment.Center,
    //   offset: { dx: CommonConstants.OFFSET_X, dy: CommonConstants.OFFSET_Y }
    // });
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(55:5)", "entry");
            Column.justifyContent(FlexAlign.SpaceBetween);
            Column.width(CommonConstants.PERCENT_FULL);
            Column.height(CommonConstants.PERCENT_FULL);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/Index.ets(56:7)", "entry");
            Text.width(CommonConstants.PERCENT_NINETY);
            Text.margin({
                top: { "id": 16777253, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" },
                bottom: { "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" },
                left: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" },
                right: { "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" }
            });
            Text.font({ size: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" }, weight: CommonConstants.FONT_WEIGHT_SEVEN_HUNDRED });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(65:7)", "entry");
            Column.width(CommonConstants.PERCENT_FULL);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(66:9)", "entry");
            Button.width({ "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Button.height({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Button.onClick(() => {
                this.daffodilsNumberCustomDialogController?.open();
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Button($r('app.string.MultiplicationTable'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.multiplicationTableCustomDialogController?.open();
            //     let result = multiplicationTable();
            //     for (let index = 0; index < result.length; index++) {
            //       Logger.info(result[index].toString());
            //     }
            //   })
            // Button($r('app.string.IsPalindromicString'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.isPalindromicStringCustomDialogController?.open();
            //   })
            Button.createWithLabel({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(90:9)", "entry");
            // Button($r('app.string.MultiplicationTable'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.multiplicationTableCustomDialogController?.open();
            //     let result = multiplicationTable();
            //     for (let index = 0; index < result.length; index++) {
            //       Logger.info(result[index].toString());
            //     }
            //   })
            // Button($r('app.string.IsPalindromicString'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.isPalindromicStringCustomDialogController?.open();
            //   })
            Button.width({ "id": 16777242, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            // Button($r('app.string.MultiplicationTable'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.multiplicationTableCustomDialogController?.open();
            //     let result = multiplicationTable();
            //     for (let index = 0; index < result.length; index++) {
            //       Logger.info(result[index].toString());
            //     }
            //   })
            // Button($r('app.string.IsPalindromicString'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.isPalindromicStringCustomDialogController?.open();
            //   })
            Button.height({ "id": 16777239, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" });
            // Button($r('app.string.MultiplicationTable'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.multiplicationTableCustomDialogController?.open();
            //     let result = multiplicationTable();
            //     for (let index = 0; index < result.length; index++) {
            //       Logger.info(result[index].toString());
            //     }
            //   })
            // Button($r('app.string.IsPalindromicString'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.isPalindromicStringCustomDialogController?.open();
            //   })
            Button.margin({ top: { "id": 16777241, "type": 10002, params: [], "bundleName": "com.example.arktsalgorithm", "moduleName": "entry" } });
            // Button($r('app.string.MultiplicationTable'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.multiplicationTableCustomDialogController?.open();
            //     let result = multiplicationTable();
            //     for (let index = 0; index < result.length; index++) {
            //       Logger.info(result[index].toString());
            //     }
            //   })
            // Button($r('app.string.IsPalindromicString'))
            //   .width($r('app.float.button_width'))
            //   .height($r('app.float.button_height'))
            //   .margin({ top: $r('app.float.button_margin_top') })
            //   .onClick(() => {
            //     this.isPalindromicStringCustomDialogController?.open();
            //   })
            Button.onClick(() => {
                this.standingCustomDialogController?.open();
            });
        }, Button);
        // Button($r('app.string.MultiplicationTable'))
        //   .width($r('app.float.button_width'))
        //   .height($r('app.float.button_height'))
        //   .margin({ top: $r('app.float.button_margin_top') })
        //   .onClick(() => {
        //     this.multiplicationTableCustomDialogController?.open();
        //     let result = multiplicationTable();
        //     for (let index = 0; index < result.length; index++) {
        //       Logger.info(result[index].toString());
        //     }
        //   })
        // Button($r('app.string.IsPalindromicString'))
        //   .width($r('app.float.button_width'))
        //   .height($r('app.float.button_height'))
        //   .margin({ top: $r('app.float.button_margin_top') })
        //   .onClick(() => {
        //     this.isPalindromicStringCustomDialogController?.open();
        //   })
        Button.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.arktsalgorithm", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
