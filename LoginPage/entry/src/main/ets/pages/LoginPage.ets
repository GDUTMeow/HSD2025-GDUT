/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { promptAction, router } from '@kit.ArkUI';
import CommonConstants from '../common/constants/CommonConstants';

@Extend(TextInput)
function inputStyle() {
  .placeholderColor($r('app.color.placeholder_color'))
  .height($r('app.float.login_input_height'))
  .fontSize($r('app.float.big_text_size'))
  .backgroundColor($r('app.color.background'))
  .width(CommonConstants.FULL_PARENT)
  .padding({ left: CommonConstants.INPUT_PADDING_LEFT })
  .margin({ top: $r('app.float.input_margin_top') })
}

@Extend(Line)
function lineStyle() {
  .width(CommonConstants.FULL_PARENT)
  .height($r('app.float.line_height'))
  .backgroundColor($r('app.color.line_color'))
}

@Extend(Text)
function blueTextStyle() {
  .fontColor($r('app.color.login_blue_text_color'))
  .fontSize($r('app.float.small_text_size'))
  .fontWeight(FontWeight.Medium)
}

/**
 * Login page
 */
@Entry
@Component
struct LoginPage {
  @State account: string = '';
  @State password: string = '';
  @State isShowProgress: boolean = false;
  private timeOutId: number = -1;

  @Builder
  imageButton(src: Resource) {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image(src)
    }
    .height($r('app.float.other_login_image_size'))
    .width($r('app.float.other_login_image_size'))
    .backgroundColor($r('app.color.background'))
  }

  login(): void {
    if (this.account === '' || this.password === '') {
      promptAction.showToast({
        message: $r('app.string.input_empty_tips')
      })
    } else {
      this.isShowProgress = true;
      if (this.timeOutId === -1) {
        this.timeOutId = setTimeout(() => {
          this.isShowProgress = false;
          this.timeOutId = -1;
          router.replaceUrl({ url: 'pages/MainPage' });
        }, CommonConstants.LOGIN_DELAY_TIME);
      }
    }
  }

  aboutToDisappear() {
    clearTimeout(this.timeOutId);
    this.timeOutId = -1;
  }

  build() {
    Column() {
      Image($r('app.media.logo'))
        .width($r('app.float.logo_image_size'))
        .height($r('app.float.logo_image_size'))
        .margin({ top: $r('app.float.logo_margin_top'), bottom: $r('app.float.logo_margin_bottom') })
      Text($r('app.string.login_page'))
        .fontSize($r('app.float.page_title_text_size'))
        .fontWeight(FontWeight.Medium)
        .fontColor($r('app.color.title_text_color'))
      Text($r('app.string.login_more'))
        .fontSize($r('app.float.normal_text_size'))
        .fontColor($r('app.color.login_more_text_color'))
        .margin({ bottom: $r('app.float.login_more_margin_bottom'), top: $r('app.float.login_more_margin_top') })
      TextInput( {"placeholder": "账号" } )
        .fontSize($r('app.float.normal_text_size'))
        .backgroundColor( "#000000FF" )
      Divider()
      TextInput( {"placeholder": "密码" })
        .fontSize($r('app.float.normal_text_size'))
        .backgroundColor( "#000000FF" )
        .type( InputType.Password )
      Divider()
      Row(
        { space: 50 }
      ) {
        Text('短信验证码登录').fontSize(12).fontColor(Color.Blue).align(Alignment.Start)
        Text()
        Text()
        Text('忘记密码').fontSize(12).fontColor(Color.Blue).align(Alignment.End)
      }.margin( 16 )
      Button('登录', { "type": ButtonType.Normal, stateEffect: true})
        .borderRadius(16)
        .width(300)
        .margin( 16 )
      Text('注册账号').fontSize(16)
      Column(
        { space: 50 }
      ) {
        Blank()
        Column (
          { space: 10 }
        ) {
          Text()
          Text('其他登录方式').fontSize(14).fontColor(Color.Grey)
          Row(
            { space: 35 }
          ) {
            Button(
              {
                type: ButtonType.Circle,
                stateEffect: false
              }
            ) {
              Image($r("app.media.login_method1")).width(50)
            }.backgroundColor("#000000FF")
            Button(
              {
                type: ButtonType.Circle,
                stateEffect: false
              }
            ) {
              Image($r("app.media.login_method2")).width(50)
            }.backgroundColor("#000000FF")
            Button(
              {
                type: ButtonType.Circle,
                stateEffect: false
              }
            ) {
              Image($r("app.media.login_method3")).width(50)
            }.backgroundColor("#000000FF")
          }
        }
      }



      // Progress( { "value": 100 ,"type": ProgressType.Linear } )
    }
    .backgroundColor($r('app.color.background'))
    .height(CommonConstants.FULL_PARENT)
    .width(CommonConstants.FULL_PARENT)
    .padding({
      left: $r('app.float.page_padding_hor'),
      right: $r('app.float.page_padding_hor'),
      bottom: $r('app.float.login_page_padding_bottom')
    })
  }
}