export function ok(type = 'Item', identifier, op) {
  return {
    message: `${type} ${identifier} ${op} correctly.`,
    position: 'br',
  };
}

export function ko(message) {
  return {
    message: `Ups! ${message}.`,
    position: 'br',
  };
}
