export const reverseStr = (str: string): string =>
    str.length <= 1 ? str : reverseStr(str.substring(1)) + str.charAt(0)
