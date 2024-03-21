// COLOUR
Blockly.Lua["colour_picker"] = function (block) {
  // Colour picker.
  const code = block.getFieldValue("COLOUR").replace("#", "0x") + "ff"
  return [code, Blockly.Lua.ORDER_ATOMIC]
}
