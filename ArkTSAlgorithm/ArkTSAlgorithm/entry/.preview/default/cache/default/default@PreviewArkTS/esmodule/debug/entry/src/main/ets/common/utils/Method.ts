/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
export function daffodilsNumber(): number[] {
    let result: number[] = [];
    for (let i = 100; i < 1000; i++) {
        let unitsDigit: number = i % 10;
        let tenthsDigit: number = Math.floor(i / 10) - Math.floor(i / 100) * 10;
        let hundredthsDigit: number = Math.floor(i / 100);
        if (i === unitsDigit * unitsDigit * unitsDigit + tenthsDigit * tenthsDigit * tenthsDigit +
            hundredthsDigit * hundredthsDigit * hundredthsDigit) {
            result.push(i);
        }
    }
    return result;
}
export function getStandings(num: number): number[] {
    let result: number[] = [];
    for (let i: number = 1; i <= num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    return result;
}
