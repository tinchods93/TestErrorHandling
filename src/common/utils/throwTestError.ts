const throwTestError = (test?: boolean) => {
  // Esto tirara un TypeError
  if (test) {
    const a: any = {};
    console.log(a.b.c);
  }
};

export default throwTestError;
