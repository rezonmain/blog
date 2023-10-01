class Strings {
  static kebabToCamel = (str: string): string =>
    str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  static capitalizeFirst = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  static kebabToPascal = (str: string): string =>
    Strings.capitalizeFirst(Strings.kebabToCamel(str));

  static strToKebab = (str: string): string =>
    str.toLocaleLowerCase().replace(/\s+/g, "-");
}

export { Strings };
