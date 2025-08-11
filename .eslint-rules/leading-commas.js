module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce leading commas in arrays and objects',
    },
    fixable: 'whitespace',
    schema: [],
  },
  create: function (context) {
    return {
      ArrayExpression: checkCommas,
      ObjectExpression: checkCommas,
    };

    function checkCommas(node) {
      if (!node.elements && !node.properties) return; // empty array or object

      const elementsOrProps = node.elements || node.properties;

      for (let i = 0; i < elementsOrProps.length; i++) {
        const elementOrProp = elementsOrProps[i];

        // Skip the first element or property, it can't have a leading comma
        if (i === 0) continue;

        const previousElementOrProp = elementsOrProps[i - 1];
        const previousElementOrPropEnd = previousElementOrProp.range[1];
        const elementOrPropStart = elementOrProp.range[0];
        const leadingComma = context.getSourceCode().getText().substring(previousElementOrPropEnd, elementOrPropStart).trim();

        if (leadingComma.indexOf(',') !== 0) {
          context.report({
            node: elementOrProp,
            message: 'Expected a leading comma',
            fix: function (fixer) {
              const leadingComma = ', ';
              return fixer.insertTextBefore(elementOrProp, leadingComma);
            },
          });
        }
      }
    }
  },
};
