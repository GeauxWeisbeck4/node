const jsDocPrefix = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/';

const jsDataStructuresUrl = `${jsDocPrefix}Data_structures`;
const jsPrimitives = {
  boolean: 'Boolean',
  integer: 'Number', // Not a primitive, used for clarification.
  null: 'Null',
  number: 'Number',
  string: 'String',
  symbol: 'Symbol',
  undefined: 'Undefined'
};

const jsGlobalObjectsUrl = `${jsDocPrefix}Reference/Global_Objects/`;
const jsGlobalTypes = [
  'AggregateError', 'Array', 'ArrayBuffer', 'DataView', 'Date', 'Error',
  'EvalError', 'Function', 'Map', 'Object', 'Promise', 'RangeError',
  'ReferenceError', 'RegExp', 'Set', 'SharedArrayBuffer', 'SyntaxError',
  'TypeError', 'TypedArray', 'URIError', 'Uint8Array',
];

const customTypesMap = {
  'any': `${jsDataStructuresUrl}#Data_types`,

  'this': `${jsDocPrefix}Reference/Operators/this`,

  'AbortController': 'globals.html#class-abortcontroller',
  'AbortSignal': 'globals.html#class-abortsignal',

  'ArrayBufferView':
    'https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView',

  'AsyncIterator': 'https://tc39.github.io/ecma262/#sec-asynciterator-interface',

  'AsyncIterable': 'https://tc39.github.io/ecma262/#sec-asynciterable-interface',

  'AsyncFunction': 'https://tc39.es/ecma262/#sec-async-function-constructor',

  'AsyncGeneratorFunction': 'https://tc39.es/proposal-async-iteration/#sec-asyncgeneratorfunction-constructor',

  'bigint': `${jsDocPrefix}Reference/Global_Objects/BigInt`,
  'WebAssembly.Instance':
    `${jsDocPrefix}Reference/Global_Objects/WebAssembly/Instance`,

  'Blob': 'buffer.html#class-blob',

  'BroadcastChannel':
    'worker_threads.html#class-broadcastchannel-' +
    'extends-eventtarget',

  'Iterable':
    `${jsDocPrefix}Reference/Iteration_protocols#The_iterable_protocol`,
  'Iterator':
    `${jsDocPrefix}Reference/Iteration_protocols#The_iterator_protocol`,

  'Module Namespace Object':
    'https://tc39.github.io/ecma262/#sec-module-namespace-exotic-objects',

  'AsyncHook': 'async_hooks.html#async_hookscreatehookcallbacks',
  'AsyncResource': 'async_hooks.html#class-asyncresource',

  'brotli options': 'zlib.html#class-brotlioptions',

  'Buffer': 'buffer.html#class-buffer',

  'ChildProcess': 'child_process.html#class-childprocess',

  'cluster.Worker': 'cluster.html#class-worker',

  'Cipher': 'crypto.html#class-cipher',
  'Decipher': 'crypto.html#class-decipher',
  'DiffieHellman': 'crypto.html#class-diffiehellman',
  'DiffieHellmanGroup': 'crypto.html#class-diffiehellmangroup',
  'ECDH': 'crypto.html#class-ecdh',
  'Hash': 'crypto.html#class-hash',
  'Hmac': 'crypto.html#class-hmac',
  'KeyObject': 'crypto.html#class-keyobject',
  'Sign': 'crypto.html#class-sign',
  'Verify': 'crypto.html#class-verify',
  'crypto.constants': 'crypto.html#cryptoconstants',

  'CryptoKey': 'webcrypto.html#class-cryptokey',
  'CryptoKeyPair': 'webcrypto.html#class-cryptokeypair',
  'Crypto': 'webcrypto.html#class-crypto',
  'SubtleCrypto': 'webcrypto.html#class-subtlecrypto',
  'RsaOaepParams': 'webcrypto.html#class-rsaoaepparams',
  'AesCtrParams': 'webcrypto.html#class-aesctrparams',
  'AesCbcParams': 'webcrypto.html#class-aescbcparams',
  'AesGcmParams': 'webcrypto.html#class-aesgcmparams',
  'AesKwParams': 'webcrypto.html#class-aeskwparams',
  'EcdhKeyDeriveParams': 'webcrypto.html#class-ecdhkeyderiveparams',
  'HkdfParams': 'webcrypto.html#class-hkdfparams',
  'Pbkdf2Params': 'webcrypto.html#class-pbkdf2params',
  'HmacKeyGenParams': 'webcrypto.html#class-hmackeygenparams',
  'AesKeyGenParams': 'webcrypto.html#class-aeskeygenparams',
  'RsaHashedKeyGenParams':
    'webcrypto.html#class-rsahashedkeygenparams',
  'EcKeyGenParams': 'webcrypto.html#class-eckeygenparams',
  'RsaHashedImportParams':
    'webcrypto.html#class-rsahashedimportparams',
  'EcKeyImportParams': 'webcrypto.html#class-eckeyimportparams',
  'HmacImportParams': 'webcrypto.html#class-hmacimportparams',
  'AesImportParams': 'webcrypto.html#class-aesimportparams',
  'Pbkdf2ImportParams': 'webcrypto.html#class-pbkdf2importparams',
  'HmacParams': 'webcrypto.html#class-hmacparams',
  'EcdsaParams': 'webcrypto.html#class-ecdsaparams',
  'RsaPssParams': 'webcrypto.html#class-rsapssparams',
  'RsaSignParams': 'webcrypto.html#class-rsasignparams',
  'NodeDhImportParams': 'webcrypto.html#class-nodedhimportparams',
  'NodeDhKeyGenParams': 'webcrypto.html#class-nodedhkeygenparams',
  'NodeDhDeriveBitsParams':
    'webcrypto.html#class-nodedhderivebitsparams',
  'NodeDsaImportParams': 'webcrypto.html#class-nodedsaimportparams',
  'NodeDsaKeyGenParams': 'webcrypto.html#class-nodedsakeygenparams',
  'NodeDsaSignParams': 'webcrypto.html#class-nodedsasignparams',
  'NodeScryptImportParams':
    'webcrypto.html#class-nodescryptimportparams',
  'NodeScryptParams': 'webcrypto.html#class-nodescryptparams',
  'NodeEdKeyImportParams':
    'webcrypto.html#class-nodeedkeyimportparams',
  'NodeEdKeyGenParams':
    'webcrypto.html#class-nodeedkeygenparams',

  'dgram.Socket': 'dgram.html#class-dgramsocket',

  'Channel': 'diagnostics_channel.html#class-channel',

  'Domain': 'domain.html#class-domain',

  'errors.Error': 'errors.html#class-error',

  'import.meta': 'esm.html#importmeta',

  'EventEmitter': 'events.html#class-eventemitter',
  'EventTarget': 'events.html#class-eventtarget',
  'Event': 'events.html#class-event',
  'EventListener': 'events.html#event-listener',

  'FileHandle': 'fs.html#class-filehandle',
  'fs.Dir': 'fs.html#class-fsdir',
  'fs.Dirent': 'fs.html#class-fsdirent',
  'fs.FSWatcher': 'fs.html#class-fsfswatcher',
  'fs.ReadStream': 'fs.html#class-fsreadstream',
  'fs.Stats': 'fs.html#class-fsstats',
  'fs.StatWatcher': 'fs.html#class-fsstatwatcher',
  'fs.WriteStream': 'fs.html#class-fswritestream',

  'http.Agent': 'http.html#class-httpagent',
  'http.ClientRequest': 'http.html#class-httpclientrequest',
  'http.IncomingMessage': 'http.html#class-httpincomingmessage',
  'http.Server': 'http.html#class-httpserver',
  'http.ServerResponse': 'http.html#class-httpserverresponse',

  'ClientHttp2Session': 'http2.html#class-clienthttp2session',
  'ClientHttp2Stream': 'http2.html#class-clienthttp2stream',
  'HTTP/2 Headers Object': 'http2.html#headers-object',
  'HTTP/2 Settings Object': 'http2.html#settings-object',
  'http2.Http2ServerRequest': 'http2.html#class-http2http2serverrequest',
  'http2.Http2ServerResponse':
    'http2.html#class-http2http2serverresponse',
  'Http2SecureServer': 'http2.html#class-http2secureserver',
  'Http2Server': 'http2.html#class-http2server',
  'Http2Session': 'http2.html#class-http2session',
  'Http2Stream': 'http2.html#class-http2stream',
  'ServerHttp2Stream': 'http2.html#class-serverhttp2stream',

  'https.Server': 'https.html#class-httpsserver',

  'module': 'modules.html#the-module-object',

  'module.SourceMap':
    'module.html#class-modulesourcemap',

  'require': 'modules.html#requireid',

  'Handle': 'net.html#serverlistenhandle-backlog-callback',
  'net.BlockList': 'net.html#class-netblocklist',
  'net.Server': 'net.html#class-netserver',
  'net.Socket': 'net.html#class-netsocket',
  'net.SocketAddress': 'net.html#class-netsocketaddress',

  'NodeEventTarget':
    'events.html#class-nodeeventtarget',

  'os.constants.dlopen': 'os.html#dlopen-constants',

  'Histogram': 'perf_hooks.html#class-histogram',
  'IntervalHistogram':
     'perf_hooks.html#class-intervalhistogram-extends-histogram',
  'RecordableHistogram':
     'perf_hooks.html#class-recordablehistogram-extends-histogram',
  'PerformanceEntry': 'perf_hooks.html#class-performanceentry',
  'PerformanceNodeTiming':
    'perf_hooks.html#class-performancenodetiming',
  'PerformanceObserver':
    'perf_hooks.html#class-perf_hooksperformanceobserver',
  'PerformanceObserverEntryList':
    'perf_hooks.html#class-performanceobserverentrylist',

  'readline.Interface':
    'readline.html#class-readlineinterface',
  'readline.InterfaceConstructor':
    'readline.html#class-interfaceconstructor',
  'readlinePromises.Interface':
    'readline.html#class-readlinepromisesinterface',

  'repl.REPLServer': 'repl.html#class-replserver',

  'Stream': 'stream.html#stream',
  'stream.Duplex': 'stream.html#class-streamduplex',
  'Duplex': 'stream.html#class-streamduplex',
  'stream.Readable': 'stream.html#class-streamreadable',
  'Readable': 'stream.html#class-streamreadable',
  'stream.Transform': 'stream.html#class-streamtransform',
  'Transform': 'stream.html#class-streamtransform',
  'stream.Writable': 'stream.html#class-streamwritable',
  'Writable': 'stream.html#class-streamwritable',

  'Immediate': 'timers.html#class-immediate',
  'Timeout': 'timers.html#class-timeout',
  'Timer': 'timers.html#timers',

  'tls.SecureContext': 'tls.html#tlscreatesecurecontextoptions',
  'tls.Server': 'tls.html#class-tlsserver',
  'tls.TLSSocket': 'tls.html#class-tlstlssocket',

  'Tracing': 'tracing.html#tracing-object',

  'URL': 'url.html#the-whatwg-url-api',
  'URLSearchParams': 'url.html#class-urlsearchparams',

  'vm.Module': 'vm.html#class-vmmodule',
  'vm.Script': 'vm.html#class-vmscript',
  'vm.SourceTextModule': 'vm.html#class-vmsourcetextmodule',

  'MessagePort': 'worker_threads.html#class-messageport',
  'Worker': 'worker_threads.html#class-worker',

  'X509Certificate': 'crypto.html#class-x509certificate',

  'zlib options': 'zlib.html#class-options',

  'ReadableStream':
    'webstreams.md#class-readablestream',
  'ReadableStreamDefaultReader':
    'webstreams.md#class-readablestreamdefaultreader',
  'ReadableStreamBYOBReader':
    'webstreams.md#class-readablestreambyobreader',
  'ReadableStreamDefaultController':
    'webstreams.md#class-readablestreamdefaultcontroller',
  'ReadableByteStreamController':
    'webstreams.md#class-readablebytestreamcontroller',
  'ReadableStreamBYOBRequest':
    'webstreams.md#class-readablestreambyobrequest',
  'WritableStream':
    'webstreams.md#class-writablestream',
  'WritableStreamDefaultWriter':
    'webstreams.md#class-writablestreamdefaultwriter',
  'WritableStreamDefaultController':
    'webstreams.md#class-writablestreamdefaultcontroller',
  'TransformStream':
    'webstreams.md#class-transformstream',
  'TransformStreamDefaultController':
    'webstreams.md#class-transformstreamdefaultcontroller',
  'ByteLengthQueuingStrategy':
    'webstreams.md#class-bytelengthqueuingstrategy',
  'CountQueuingStrategy':
    'webstreams.md#class-countqueuingstrategy',
  'TextEncoderStream':
    'webstreams.md#class-textencoderstream',
  'TextDecoderStream':
    'webstreams.md#class-textdecoderstream',

  'Headers': 'https://developer.mozilla.org/en-US/docs/Web/API/Headers',
  'Response': 'https://developer.mozilla.org/en-US/docs/Web/API/Response',
  'Request': 'https://developer.mozilla.org/en-US/docs/Web/API/Request',
};

const arrayPart = /(?:\[])+$/;

export function toLink(typeInput) {
  const typeLinks = [];
  typeInput = typeInput.replace('{', '').replace('}', '');
  const typeTexts = typeInput.split('|');

  typeTexts.forEach((typeText) => {
    typeText = typeText.trim();
    if (typeText) {
      let typeUrl;

      // To support type[], type[][] etc., we store the full string
      // and use the bracket-less version to lookup the type URL.
      const typeTextFull = typeText;
      typeText = typeText.replace(arrayPart, '');

      const primitive = jsPrimitives[typeText];

      if (primitive !== undefined) {
        typeUrl = `${jsDataStructuresUrl}#${primitive}_type`;
      } else if (jsGlobalTypes.includes(typeText)) {
        typeUrl = `${jsGlobalObjectsUrl}${typeText}`;
      } else {
        typeUrl = customTypesMap[typeText];
      }

      if (typeUrl) {
        typeLinks.push(
          `<a href="${typeUrl}" class="type">&lt;${typeTextFull}&gt;</a>`);
      } else {
        throw new Error(
          `Unrecognized type: '${typeTextFull}'.\n` +
          `Please, edit the type or update '${import.meta.url}'.`
        );
      }
    } else {
      throw new Error(`Empty type slot: ${typeInput}`);
    }
  });

  return typeLinks.length ? typeLinks.join(' | ') : typeInput;
}
