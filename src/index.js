// @flow

const crypto = require('crypto');

export default class IdGenerator {
  constructor(secret: string | null) {
    if (!secret && process.env.HASH_KEY) {
      throw new Error('You must provide a secret or a hash key');
    } else if (secret) {
      this.secret = secret;
    } else {
      this.secret = process.env.HASH_KEY;
    }
  }
  // Helper
  static dateStringBuilder(date): string {
    const dateString = date
      .getFullYear()
      .toString()
      .concat(date.getMonth() + 1, date.getHours(), date.getMinutes());
    return dateString;
  }

  // Helper
  static secondsStringBuilder(date): string {
    return date
      .getSeconds()
      .toString()
      .concat(date.getMilliseconds());
  }

  static hashAndCut(message, secret, len = 3): string {
    const hash = crypto
      .createHmac('sha512', secret)
      .update(message)
      .digest('base64');
    return hash.replace(/\W/g, '').substr(0, len);
  }

  getUniqKey(length) {
    console.log(length);
    const moduloLen = length % 7;

    const partLenght = (length - moduloLen) / 7;
    console.log(partLenght, moduloLen);

    /* Padding characters */
    let paddingChars = 0;
    let trimmingChars = 0;
    if (moduloLen % 2 === 0) {
      paddingChars = moduloLen / 2;
      trimmingChars = moduloLen / 2;
    } else {
      const remaining = moduloLen % 2;
      paddingChars = (moduloLen - remaining) / 2;
      trimmingChars = paddingChars + remaining;
    }

    const date = new Date();

    const yearPart = IdGenerator.hashAndCut(
      date.getFullYear().toString(),
      this.secret,
      partLenght
    );
    const monthPart = IdGenerator.hashAndCut(
      date.getMonth().toString(),
      this.secret,
      partLenght
    );
    const dayPart = IdGenerator.hashAndCut(
      date.getDate().toString(),
      this.secret,
      partLenght
    );
    const hourPart = IdGenerator.hashAndCut(
      date.getHours().toString(),
      this.secret,
      partLenght
    );
    const minutePart = IdGenerator.hashAndCut(
      date.getMinutes().toString(),
      this.secret,
      partLenght
    );
    const secondsPart = IdGenerator.hashAndCut(
      date.getSeconds().toString(),
      this.secret,
      partLenght + paddingChars
    );
    const milisecondsPart = IdGenerator.hashAndCut(
      date.getMilliseconds().toString(),
      this.secret,
      partLenght + trimmingChars
    );

    return yearPart.concat(
      monthPart,
      dayPart,
      hourPart,
      minutePart,
      secondsPart,
      milisecondsPart
    );
  }

  generate(prefix, length = 24): string {
    if (prefix.toString().length < 2) {
      throw new Error('Prefix too short');
    } else {
      return prefix.toString().concat('_', this.getUniqKey(length));
    }
  }
}
