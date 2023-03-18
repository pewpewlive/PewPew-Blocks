Blockly.Blocks['pewpew_print'] = {
  init: function () {
    this.appendValueInput("text")
      .setCheck(null)
      .appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("Prints the given text to the console.");
    this.setHelpUrl("");
  }
};
Blockly.Lua['pewpew_print'] = function (block) {
  var text_string = Blockly.Lua.valueToCode(block, 'text', Blockly.Lua.ORDER_ATOMIC);
  var code = `pewpew.print(${text_string})\n`;
  return code;
};

Blockly.Blocks['pewpew_print_debug_info'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("print debug info");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("Prints debug info: the number of entities created and the amount of memory used by the script.");
    this.setHelpUrl("");
  }
};
Blockly.Lua['pewpew_print_debug_info'] = function (block) {
  var code = 'pewpew.print_debug_info()\n';
  return code;
};

Blockly.Blocks['pewpew_set_level_size'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set level size");
    this.appendValueInput("width")
      .setCheck("Fixedpoint")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("width:");
    this.appendValueInput("height")
      .setCheck("Fixedpoint")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("height:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip("Sets a level's size.");
    this.setHelpUrl("");
  }
};
Blockly.Lua['pewpew_set_level_size'] = function (block) {
  var value_width = Blockly.Lua.valueToCode(block, 'width', Blockly.Lua.ORDER_ATOMIC);
  var value_height = Blockly.Lua.valueToCode(block, 'height', Blockly.Lua.ORDER_ATOMIC);

  var code = `pewpew.set_level_size(${value_width}, ${value_height})\n`;
  return code;
};

Blockly.Blocks['pewpew_add_update_callback'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("add update callback");
    this.appendStatementInput("fun")
        .setCheck(null)
    this.setColour(230);
 this.setTooltip("Loops the items in the block 30 times per second.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['pewpew_add_update_callback'] = function(block) {
  var statements_fun = Blockly.Lua.statementToCode(block, 'fun');
  // TODO: Assemble Lua into code variable.
  var code = `pewpew.add_update_callback(function()
  ${statements_fun}end)
  `;
  return code;
};

Blockly.Blocks['pewpew_configure_player'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("configure player");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("player index:")
        .appendField(new Blockly.FieldNumber(0, 0, 1), "player_index");
    this.appendValueInput("shield")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("shields:");
    this.appendValueInput("camera_x_override")
        .setCheck("Fixedpoint")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("camera x override:");
    this.appendValueInput("camera_y_override")
        .setCheck("Fixedpoint")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("camera y override:");
    this.appendValueInput("camera_distance")
        .setCheck("Fixedpoint")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("camera distance:");
    this.appendValueInput("camera_rotation_x_axis")
        .setCheck("Fixedpoint")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("camera x axis rotation:");
    this.appendValueInput("move_joystick_color")
        .setCheck("Colour")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("move joystick color:");
    this.appendValueInput("shoot_joystick_color")
        .setCheck("Colour")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("shoot joystick color:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("Configure options related to the player.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['pewpew_configure_player'] = function(block) {
  var number_player_index = block.getFieldValue('player_index');
  var value_shield = Blockly.Lua.valueToCode(block, 'shield', Blockly.Lua.ORDER_ATOMIC);
  var value_camera_x_override = Blockly.Lua.valueToCode(block, 'camera_x_override', Blockly.Lua.ORDER_ATOMIC);
  var value_camera_y_override = Blockly.Lua.valueToCode(block, 'camera_y_override', Blockly.Lua.ORDER_ATOMIC);
  var value_camera_distance = Blockly.Lua.valueToCode(block, 'camera_distance', Blockly.Lua.ORDER_ATOMIC);
  var value_camera_rotation_x_axis = Blockly.Lua.valueToCode(block, 'camera_rotation_x_axis', Blockly.Lua.ORDER_ATOMIC);
  var value_move_joystick_color = Blockly.Lua.valueToCode(block, 'move_joystick_color', Blockly.Lua.ORDER_ATOMIC);
  var value_shoot_joystick_color = Blockly.Lua.valueToCode(block, 'shoot_joystick_color', Blockly.Lua.ORDER_ATOMIC);
  
  var codeArray = [`pewpew.configure_player(${number_player_index}, {`]
  value_shield ? codeArray.push(`shield = ${value_shield},`) : null
  value_camera_x_override ? codeArray.push(`camera_x_override = ${value_camera_x_override},`) : null
  value_camera_y_override ? codeArray.push(`camera_y_override = ${value_camera_y_override},`) : null
  value_camera_distance ? codeArray.push(`camera_distance = ${value_camera_distance},`) : null
  value_camera_rotation_x_axis ? codeArray.push(`camera_rotation_x_axis = ${value_camera_rotation_x_axis},`) : null
  value_move_joystick_color ? codeArray.push(`move_joystick_color = ${value_move_joystick_color},`) : null
  value_shoot_joystick_color ? codeArray.push(`shoot_joystick_color = ${value_shoot_joystick_color},`) : null
  codeArray.push("})\n")
  var code = codeArray.join("");
  return code;
};

Blockly.Blocks['pewpew_new_player_ship'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new player ship");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("player index:")
        .appendField(new Blockly.FieldNumber(0, 0, 1), "player_index");
    this.appendValueInput("x")
        .setCheck("Fixedpoint")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x:");
    this.appendValueInput("y")
        .setCheck("Fixedpoint")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y:");
    this.setOutput(true, "Ship");
    this.setColour(300);
 this.setTooltip("Creates a new player's ship.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['pewpew_new_player_ship'] = function(block) {
  var number_player_index = block.getFieldValue('player_index');
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);

  var code = `pewpew.new_player_ship(${value_x}, ${value_y}, ${number_player_index})`;
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Blocks['pewpew_configure_player_ship_weapon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("configure ship weapon");
    this.appendValueInput("weapon_config")
        .setCheck("Weapon")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("weapon config:");
    this.appendValueInput("ship_id")
        .setCheck("Ship")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ship:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Configures a ship's weapon.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['pewpew_configure_player_ship_weapon'] = function(block) {
  var value_weapon_config = Blockly.Lua.valueToCode(block, 'weapon_config', Blockly.Lua.ORDER_ATOMIC);
  var value_ship_id = Blockly.Lua.valueToCode(block, 'ship_id', Blockly.Lua.ORDER_ATOMIC);
  //var variable_player_id = Blockly.Lua.nameDB_.getName(block.getFieldValue('player_id'), Blockly.Names.NameType.VARIABLE);

  var code = `pewpew.configure_player_ship_weapon(${value_ship_id}, ${value_weapon_config})\n`;
  return code;
};

Blockly.Blocks['weapon_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("frequency:")
        .appendField(new Blockly.FieldDropdown([["1 Hz","pewpew.CannonFrequency.FREQ_1"], ["2 Hz","pewpew.CannonFrequency.FREQ_2"], ["3 Hz","pewpew.CannonFrequency.FREQ_3"], ["5 Hz","pewpew.CannonFrequency.FREQ_5"], ["6 Hz","pewpew.CannonFrequency.FREQ_6"], ["7.5 Hz","pewpew.CannonFrequency.FREQ_7_5"], ["10 Hz","pewpew.CannonFrequency.FREQ_10"], ["15 Hz","pewpew.CannonFrequency.FREQ_15"], ["30 Hz","pewpew.CannonFrequency.FREQ_30"]]), "frequency");
    this.appendDummyInput()
        .appendField("cannon:")
        .appendField(new Blockly.FieldDropdown([["single","pewpew.CannonType.SINGLE"], ["tic-toc","pewpew.CannonType.TIC_TOC"], ["double","pewpew.CannonType.DOUBLE"], ["four directions","pewpew.CannonType.FOUR_DIRECTIONS"], ["double swipe","pewpew.CannonType.DOUBLE_SWIPE"], ["hemisphere","pewpew.CannonType.HEMISPHERE"]]), "cannon");
    this.appendValueInput("duration")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("duration:");
    this.setOutput(true, "Weapon");
    this.setColour(230);
 this.setTooltip("Player's weapon configuration.");
 this.setHelpUrl("");
  }
};
Blockly.Lua['weapon_config'] = function(block) {
  var dropdown_frequency = block.getFieldValue('frequency');
  var dropdown_cannon = block.getFieldValue('cannon');
  var value_duration = Blockly.Lua.valueToCode(block, 'duration', Blockly.Lua.ORDER_ATOMIC);
  if (value_duration)
    var code = `{frequency = ${dropdown_frequency}, cannon = ${dropdown_cannon}, duration = ${value_duration}}`;
  else
    var code = `{frequency = ${dropdown_frequency}, cannon = ${dropdown_cannon}}`;
  
  return [code, Blockly.Lua.ORDER_HIGH];
};
