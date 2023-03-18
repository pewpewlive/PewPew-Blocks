Blockly.Blocks['fmath_number'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldNumber(0), "FNUM")
        .appendField("fx");
    this.setInputsInline(true);
    this.setOutput(true, "Fixedpoint");
    this.setColour(230);
  }
};
Blockly.Lua['fmath_number'] = function(block) {
  const code = `${Number(block.getFieldValue('FNUM'))}fx`;
  const order = code < 0 ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Blocks['fmath_max_fixedpoint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("max fixedpoint");
    this.setOutput(true, "Fixedpoint");
    this.setColour(230);
 this.setTooltip("Returns a maximum possible fixedpoint number.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['fmath_max_fixedpoint'] = function(block) {
  var code = 'fmath.max_fixedpoint()';
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Blocks['fmath_sqrt'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Fixedpoint")
        .appendField("square root of:");
    this.setOutput(true, "Fixedpoint");
    this.setColour(230);
 this.setTooltip("Square root of x number.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['fmath_sqrt'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var code = `fmath.sqrt(${value_x})`;
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Blocks['fmath_to_int'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Fixedpoint")
        .appendField("to int:");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("Converts a fixedpoint number to an integer.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['fmath_to_int'] = function(block) {
  var value_value = Blockly.Lua.valueToCode(block, 'value', Blockly.Lua.ORDER_ATOMIC);
  var code = `fmath.to_int(${value_value})`;
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Blocks['fmath_arithmetic'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck("Fixedpoint");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["+","ADD"], ["-","MINUS"], ["*","MULTIPLY"], ["÷","DIVIDE"], ["^","POWER"]]), "OP");
    this.appendValueInput("B")
        .setCheck("Fixedpoint")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, "Fixedpoint");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Lua['fmath_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  const OPERATORS = {
    'ADD': [' + ', Blockly.Lua.ORDER_ADDITIVE],
    'MINUS': [' - ', Blockly.Lua.ORDER_ADDITIVE],
    'MULTIPLY': [' * ', Blockly.Lua.ORDER_MULTIPLICATIVE],
    'DIVIDE': [' / ', Blockly.Lua.ORDER_MULTIPLICATIVE],
    'POWER': [' ^ ', Blockly.Lua.ORDER_EXPONENTIATION],
  };
  const tuple = OPERATORS[block.getFieldValue('OP')];
  const operator = tuple[0];
  const order = tuple[1];
  const argument0 = Blockly.Lua.valueToCode(block, 'A', order) || '0';
  const argument1 = Blockly.Lua.valueToCode(block, 'B', order) || '0';
  const code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Blocks['fmath_modulo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("remainder of");
    this.appendValueInput("DIVIDEND")
        .setCheck("Fixedpoint");
    this.appendDummyInput()
        .appendField("÷");
    this.appendValueInput("DIVISOR")
        .setCheck("Fixedpoint");
    this.setInputsInline(true);
    this.setOutput(true, "Fixedpoint");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Lua['fmath_modulo'] = function(block) {
  // Remainder computation.
  const argument0 =
    Blockly.Lua.valueToCode(block, 'DIVIDEND', Blockly.Lua.ORDER_MULTIPLICATIVE) || '0';
  const argument1 =
    Blockly.Lua.valueToCode(block, 'DIVISOR', Blockly.Lua.ORDER_MULTIPLICATIVE) || '0';
  const code = argument0 + ' % ' + argument1;
  return [code, Blockly.Lua.ORDER_MULTIPLICATIVE];
};

Blockly.Blocks['fmath_tau'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("τ");
    this.setInputsInline(true);
    this.setOutput(true, "Fixedpoint");
    this.setColour(230);
 this.setTooltip("Returns τ (aka 2π).");
 this.setHelpUrl("");
  }
};
Blockly.Lua['fmath_tau'] = function(block) {
  var code = 'fmath.tau()';
  return [code, Blockly.Lua.ORDER_HIGH];
};