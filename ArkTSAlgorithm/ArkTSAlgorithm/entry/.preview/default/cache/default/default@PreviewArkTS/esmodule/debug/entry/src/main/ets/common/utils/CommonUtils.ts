import promptAction from "@ohos:promptAction";
import { CommonConstants } from "@bundle:com.example.arktsalgorithm/entry/ets/common/constants/Constants";
export class CommonUtils {
    showToast(message: string) {
        promptAction.showToast({
            message: message,
            duration: CommonConstants.TOAST_TIME
        });
    }
}
let commonUtils = new CommonUtils();
export default commonUtils as CommonUtils;
