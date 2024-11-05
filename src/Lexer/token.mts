export const Tag = {
  ASSIGN: "=",
  EQ: "==",
  NOT_EQ: "!=",
  GT: ">",
  LT: "<",
  GT_EQ: ">=",
  LT_EQ: "<=",
  LSHIFT: "<<",
  RSHIFT: ">>",
  LSHIFT_EQ: "<<=",
  RSHIFT_EQ: ">>=",
  PLUS: "+",
  MINUS: "-",
  INC: "++",
  DEC: "--",
  PLUS_EQ: "+=",
  MINUS_EQ: "-=",
  DIV: "/",
  DIV_EQ: "/=",
  MUL: "*",
  MUL_EQ: "*=",
  ARROW: "->",
  BNOT: "~",
  BAND: "&",
  BAND_EQ: "&=",
  BOR: "|",
  BOR_EQ: "|=",
  AT: "@",
  COMMA: ",",
  PERCENT: "%",
  LPAREN: "(",
  RPAREN: ")",
  LSQRB: "[",
  RSQRB: "]",
  LBRACE: "{",
  RBRACE: "}",
  COLON: ":",
  PERIOD: ".",
  EOF: Symbol.for("<eof>"),
  STRLIT: Symbol.for("<strlit>"),
  CHARLIT: Symbol.for("<charlit>"),
  MULTILINESTRLIT: Symbol.for("<multilinestrlit>"),
  INTLIT: Symbol.for("<intlit>"),
  FLOATLIT: Symbol.for("<floatlit>"),
  COMMENT: Symbol.for("<comment>"),
  IDENT: Symbol.for("<identifier>"),
  BUILTIN: Symbol.for("<builtin_func>"),
  INVALID: Symbol.for("<invalid>"),
} as const;

export const Keyword = [
  "if",
  "else",
  "then",
  "typeof",
  "delete",
  "fun",
  "throw",
  "for",
  "while",
  "break",
  "continue",
  "new",
  "return",
  "true",
  "false",
  "error",
  "super",
  "struct",
  "empty",
  "is",
  "pow",
  "mod",
  "in",
  "xor",
  "not",
  "or",
  "and",
  "set",
] as string[];

export const Nums = Array.from("123456789");
export const Alpha = Array.from(
  "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
);

// https://jkorpela.fi/chars/spaces.html
export const WhiteSpace = [
  "\u0009",
  "\u000a",
  "\u000b",
  "\u000c",
  "\u000d",
  "\u0020",
  "\u0085",
  "\u00a0",
  "\u1680",
  "\u180e",
  "\u2000",
  "\u2001",
  "\u2002",
  "\u2003",
  "\u2004",
  "\u2005",
  "\u2006",
  "\u2007",
  "\u2008",
  "\u2009",
  "\u200a",
  "\u200b",
  "\u200c",
  "\u200d",
  "\u200e",
  "\u200f",
  "\u2028",
  "\u2029",
  "\u202f",
  "\u205f",
  "\u3000",
  "\ufeff",
] as string[];

export const ControlCode = [
  "\u0001",
  "\u0002",
  "\u0003",
  "\u0004",
  "\u0005",
  "\u0006",
  "\u0007",
  "\u0008",
  "\u0009",
  "\u000B",
  "\u000C",
  "\u000D",
  "\u000E",
  "\u000F",
  "\u0010",
  "\u0011",
  "\u0012",
  "\u0013",
  "\u0014",
  "\u0015",
  "\u0016",
  "\u0017",
  "\u0018",
  "\u0019",
  "\u001A",
  "\u001B",
  "\u001C",
  "\u001D",
  "\u001E",
  "\u001F",
  "\u007F",
] as string[];

export type tag = (typeof Tag)[keyof typeof Tag];

export type token = {
  _tag: tag;
  _loc: loc;
};

export type loc = {
  _from: number;
  _to: number;
  _lineno: number;
};
