/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CommonConstants as Const } from '../common/constants/CommonConstants';
import ProductItem from '../viewmodel/ProductItem';
import { waterFlowData } from '../viewmodel/HomeViewModel';

/**
 * Flow item component.
 * Usage: This component is used in FlowItem.
 */
@Component
export default struct FlowItemComponent {
  item: ProductItem = waterFlowData[0];

  build() {
    Column() {
      Image(this.item.image_url)
      Text(this.item.name).fontColor(Color.Black).alignSelf(ItemAlign.Start)
      Text(this.item.price).fontColor(Color.Red).alignSelf(ItemAlign.Start)
    }
    .borderRadius($r('app.float.product_layout_radius'))
    .backgroundColor(Color.White)
    .padding({
      left: $r('app.float.product_layout_margin_left'),
      right: $r('app.float.product_layout_margin_right'),
      bottom: $r('app.float.product_layout_margin_bottom')
    })
  }
  buildWaterFlowItem(item: ProductItem, idx: number) {

  }
}