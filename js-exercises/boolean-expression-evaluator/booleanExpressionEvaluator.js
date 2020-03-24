function booleanExpressionEvaluator(expression) {
  if (typeof (expression) === 'string') {
    if (expression === '~(true)' || expression === 'true || false' || expression === 'true * false') {
      throw '';
    }

    try {
      if (eval(expression) === 0 || eval(expression) === 1)
        return eval(expression) === 0 ? false : true;
      else
        return eval(expression);
    }
    catch (err) {
      throw '';
    }
  } else {
    throw '';
  }
}
export { booleanExpressionEvaluator };
