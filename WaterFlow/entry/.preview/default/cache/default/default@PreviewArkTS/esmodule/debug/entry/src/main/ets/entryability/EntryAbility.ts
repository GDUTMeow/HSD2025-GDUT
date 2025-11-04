import UIAbility from "@ohos:app.ability.UIAbility";
import type window from "@ohos:window";
import Logger from "@bundle:com.huawei.waterflow/entry/ets/common/utils/Logger";
/**
 * Lift cycle management of Ability.
 */
export default class EntryAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage): void {
        // Main window is created, set main page for this ability
        windowStage.loadContent('pages/HomePage', (err, data) => {
            if (err.code) {
                Logger.error('Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
                return;
            }
            Logger.info('Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
        });
    }
}
