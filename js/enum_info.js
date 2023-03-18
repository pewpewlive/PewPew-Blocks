/**
 * Order of operation ENUMs.
 * http://www.lua.org/manual/5.3/manual.html#3.4.8
 */
Blockly.Lua.ORDER_ATOMIC = 0;  // literals
// The next level was not explicit in documentation and inferred by Ellen.
Blockly.Lua.ORDER_HIGH = 1;            // Function calls, tables[]
Blockly.Lua.ORDER_EXPONENTIATION = 2;  // ^
Blockly.Lua.ORDER_UNARY = 3;           // not # - ~
Blockly.Lua.ORDER_MULTIPLICATIVE = 4;  // * / %
Blockly.Lua.ORDER_ADDITIVE = 5;        // + -
Blockly.Lua.ORDER_CONCATENATION = 6;   // ..
Blockly.Lua.ORDER_RELATIONAL = 7;      // < > <=  >= ~= ==
Blockly.Lua.ORDER_AND = 8;             // and
Blockly.Lua.ORDER_OR = 9;              // or
Blockly.Lua.ORDER_NONE = 99;