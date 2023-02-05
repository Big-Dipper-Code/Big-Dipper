const codeUtil = {
  runBlockItems(items) {
    items.forEach((item) => {
      console.log(item);
      codeUtil.runBlockItem(item);
    });
  },
  runBlockItem(item) {
    const name = item.name;
    switch (name) {
      case "assignment":
        return codeUtil.runAssignment(item);
      case "output":
        return codeUtil.runOutput(item);
      case "expression":
        return codeUtil.runExpression(item);
      case "variable":
        return codeUtil.runVariable(item);
      default:
        console.log("Unknown item: ", item);
    }
  },
  runAssignment(item) {
    console.log("runAssignment: ", item);
    const variable = item.variable;
    const expression = item.expression;

    const expression_value = codeUtil.runExpression(expression);
    eval(`window.${variable.value} = ${expression_value}`);
  },
  runOutput(item) {
    console.log("runOutput: ", item);
    const expression = item.expression;
    const expression_value = codeUtil.runExpression(expression);
    console.log(expression_value);
  },
  runExpression(item) {
    console.log("runExpression: ", item);
    const value = item.value;
    return eval(value);
  },
  runVariable(item) {
    console.log("runVariable: ", item);
    const value = item.value;
    return value;
  },
};

export default codeUtil;
