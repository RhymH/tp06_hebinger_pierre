import { Pipe } from "@angular/core";

@Pipe({
  name: "tel"
})
export class PipeTelephone {
  transform(rawNum) {
    rawNum = rawNum.charAt(0) != 0 ? "0" + rawNum : "" + rawNum;

    let newStr = "+33 " + rawNum.substr(1, 1) + " ";
    let i = 1;

    for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
      newStr = newStr + rawNum.substr(i * 2, 2) + " ";
    }

    return newStr + rawNum.substr(i * 2);
  }
}
