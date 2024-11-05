export const State = {
  start: 0,
  ident: 1,
  builtin: 2,
  str_lit: 3,
  mult_line_str_lit: 4,
  char_lit: 5,
  back_slash: 6,
  equal: 7,
  bang: 8,
  pipe: 9,
  minus: 10,
  ampersand: 11,
  plus: 12,
  asterisk: 13,
  saw_at_sign: 14,
  slash: 15,
  line_comment: 16,
  zero: 17,
  int_lit_dec: 18,
  float_lit: 19,
  langle: 20,
  rangle: 21,
  percent: 22,
  mult_line_strlit_line: 23,
  str_lit_backslash: 24,
  char_lit_backslash: 26,
  int_lit_bin_nounder: 27,
  int_lit_oct_nounder: 28,
  int_lit_hex_nounder: 29,
  int_lit_bin: 30,
  int_lit_oct: 31,
  int_lit_hex: 32,
  int_lit_dec_nounder: 33,
  num_dot_dec: 34,
  float_exponent_usize: 35,
  float_lit_nounder: 36,
  float_exponent_num_nounder: 37,
  float_exponent_num: 38,
  invalid: 39,
} as const;

export type state = (typeof State)[keyof typeof State];
