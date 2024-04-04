declare module 'emscripten' {
  interface EmscriptenModule {
    HEAP8: Int8Array;
    HEAP16: Int16Array;
    HEAP32: Int32Array;
    HEAPU8: Uint8Array;
    HEAPU16: Uint16Array;
    HEAPU32: Uint32Array;
    HEAPF32: Float32Array;
    HEAPF64: Float64Array;
    stackSave(): number;
    stackRestore(stack: number): void;
    stackAlloc(size: number): number;
    setValue(ptr: number, value: number, type: string, noSafe?: boolean): void;
    getValue(ptr: number, type: string, noSafe?: boolean): number;
    addFunction(func: Function, sig: string): number;
    removeFunction(funcIndex: number): void;
    callFunction(funcIndex: number, args: any[]): any;
    callMain(args?: any[]): void;
    _malloc(size: number): number;
    _free(ptr: number): void;
    UTF8ToString(ptr: number, maxBytesToRead?: number): string;
    stringToUTF8(str: string, outPtr: number, maxBytesToWrite?: number): void;
    writeArrayToMemory(array: number[], buffer: number): void;
    writeAsciiToMemory(str: string, buffer: number, dontAddNull?: boolean): void;
    addRunDependency(id: any): void;
    removeRunDependency(id: any): void;
    preRun?: Function[];
    postRun?: Function[];
  }

  var Module: EmscriptenModule;
  export = Module;
}