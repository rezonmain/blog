class Strings {
  static kebabToCamel = (str: string): string => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  };

  static kebabToPascal = (str: string): string => {
    const camel = Strings.kebabToCamel(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
  };
}

export { Strings };
