/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.protocol = (function() {
    
        /**
         * Namespace protocol.
         * @exports protocol
         * @namespace
         */
        var protocol = {};
    
        /**
         * MessageType enum.
         * @name protocol.MessageType
         * @enum {string}
         * @property {number} mtHELLO=1 mtHELLO value
         * @property {number} mtMANIFESTS=2 mtMANIFESTS value
         * @property {number} mtPING=3 mtPING value
         * @property {number} mtPROOFOFWORK=4 mtPROOFOFWORK value
         * @property {number} mtCLUSTER=5 mtCLUSTER value
         * @property {number} mtGET_PEERS=12 mtGET_PEERS value
         * @property {number} mtPEERS=13 mtPEERS value
         * @property {number} mtENDPOINTS=15 mtENDPOINTS value
         * @property {number} mtTRANSACTION=30 mtTRANSACTION value
         * @property {number} mtGET_LEDGER=31 mtGET_LEDGER value
         * @property {number} mtLEDGER_DATA=32 mtLEDGER_DATA value
         * @property {number} mtPROPOSE_LEDGER=33 mtPROPOSE_LEDGER value
         * @property {number} mtSTATUS_CHANGE=34 mtSTATUS_CHANGE value
         * @property {number} mtHAVE_SET=35 mtHAVE_SET value
         * @property {number} mtVALIDATION=41 mtVALIDATION value
         * @property {number} mtGET_OBJECTS=42 mtGET_OBJECTS value
         * @property {number} mtGET_SHARD_INFO=50 mtGET_SHARD_INFO value
         * @property {number} mtSHARD_INFO=51 mtSHARD_INFO value
         */
        protocol.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "mtHELLO"] = 1;
            values[valuesById[2] = "mtMANIFESTS"] = 2;
            values[valuesById[3] = "mtPING"] = 3;
            values[valuesById[4] = "mtPROOFOFWORK"] = 4;
            values[valuesById[5] = "mtCLUSTER"] = 5;
            values[valuesById[12] = "mtGET_PEERS"] = 12;
            values[valuesById[13] = "mtPEERS"] = 13;
            values[valuesById[15] = "mtENDPOINTS"] = 15;
            values[valuesById[30] = "mtTRANSACTION"] = 30;
            values[valuesById[31] = "mtGET_LEDGER"] = 31;
            values[valuesById[32] = "mtLEDGER_DATA"] = 32;
            values[valuesById[33] = "mtPROPOSE_LEDGER"] = 33;
            values[valuesById[34] = "mtSTATUS_CHANGE"] = 34;
            values[valuesById[35] = "mtHAVE_SET"] = 35;
            values[valuesById[41] = "mtVALIDATION"] = 41;
            values[valuesById[42] = "mtGET_OBJECTS"] = 42;
            values[valuesById[50] = "mtGET_SHARD_INFO"] = 50;
            values[valuesById[51] = "mtSHARD_INFO"] = 51;
            return values;
        })();
    
        protocol.TMManifest = (function() {
    
            /**
             * Properties of a TMManifest.
             * @memberof protocol
             * @interface ITMManifest
             * @property {Uint8Array} stobject TMManifest stobject
             */
    
            /**
             * Constructs a new TMManifest.
             * @memberof protocol
             * @classdesc Represents a TMManifest.
             * @implements ITMManifest
             * @constructor
             * @param {protocol.ITMManifest=} [properties] Properties to set
             */
            function TMManifest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMManifest stobject.
             * @member {Uint8Array} stobject
             * @memberof protocol.TMManifest
             * @instance
             */
            TMManifest.prototype.stobject = $util.newBuffer([]);
    
            /**
             * Creates a new TMManifest instance using the specified properties.
             * @function create
             * @memberof protocol.TMManifest
             * @static
             * @param {protocol.ITMManifest=} [properties] Properties to set
             * @returns {protocol.TMManifest} TMManifest instance
             */
            TMManifest.create = function create(properties) {
                return new TMManifest(properties);
            };
    
            /**
             * Encodes the specified TMManifest message. Does not implicitly {@link protocol.TMManifest.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMManifest
             * @static
             * @param {protocol.ITMManifest} message TMManifest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMManifest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.stobject);
                return writer;
            };
    
            /**
             * Encodes the specified TMManifest message, length delimited. Does not implicitly {@link protocol.TMManifest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMManifest
             * @static
             * @param {protocol.ITMManifest} message TMManifest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMManifest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMManifest message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMManifest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMManifest} TMManifest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMManifest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMManifest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stobject = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("stobject"))
                    throw $util.ProtocolError("missing required 'stobject'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMManifest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMManifest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMManifest} TMManifest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMManifest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMManifest message.
             * @function verify
             * @memberof protocol.TMManifest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMManifest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!(message.stobject && typeof message.stobject.length === "number" || $util.isString(message.stobject)))
                    return "stobject: buffer expected";
                return null;
            };
    
            /**
             * Creates a TMManifest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMManifest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMManifest} TMManifest
             */
            TMManifest.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMManifest)
                    return object;
                var message = new $root.protocol.TMManifest();
                if (object.stobject != null)
                    if (typeof object.stobject === "string")
                        $util.base64.decode(object.stobject, message.stobject = $util.newBuffer($util.base64.length(object.stobject)), 0);
                    else if (object.stobject.length)
                        message.stobject = object.stobject;
                return message;
            };
    
            /**
             * Creates a plain object from a TMManifest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMManifest
             * @static
             * @param {protocol.TMManifest} message TMManifest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMManifest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.stobject = "";
                    else {
                        object.stobject = [];
                        if (options.bytes !== Array)
                            object.stobject = $util.newBuffer(object.stobject);
                    }
                if (message.stobject != null && message.hasOwnProperty("stobject"))
                    object.stobject = options.bytes === String ? $util.base64.encode(message.stobject, 0, message.stobject.length) : options.bytes === Array ? Array.prototype.slice.call(message.stobject) : message.stobject;
                return object;
            };
    
            /**
             * Converts this TMManifest to JSON.
             * @function toJSON
             * @memberof protocol.TMManifest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMManifest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMManifest;
        })();
    
        protocol.TMManifests = (function() {
    
            /**
             * Properties of a TMManifests.
             * @memberof protocol
             * @interface ITMManifests
             * @property {Array.<protocol.ITMManifest>|null} [list] TMManifests list
             * @property {boolean|null} [history] TMManifests history
             */
    
            /**
             * Constructs a new TMManifests.
             * @memberof protocol
             * @classdesc Represents a TMManifests.
             * @implements ITMManifests
             * @constructor
             * @param {protocol.ITMManifests=} [properties] Properties to set
             */
            function TMManifests(properties) {
                this.list = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMManifests list.
             * @member {Array.<protocol.ITMManifest>} list
             * @memberof protocol.TMManifests
             * @instance
             */
            TMManifests.prototype.list = $util.emptyArray;
    
            /**
             * TMManifests history.
             * @member {boolean} history
             * @memberof protocol.TMManifests
             * @instance
             */
            TMManifests.prototype.history = false;
    
            /**
             * Creates a new TMManifests instance using the specified properties.
             * @function create
             * @memberof protocol.TMManifests
             * @static
             * @param {protocol.ITMManifests=} [properties] Properties to set
             * @returns {protocol.TMManifests} TMManifests instance
             */
            TMManifests.create = function create(properties) {
                return new TMManifests(properties);
            };
    
            /**
             * Encodes the specified TMManifests message. Does not implicitly {@link protocol.TMManifests.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMManifests
             * @static
             * @param {protocol.ITMManifests} message TMManifests message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMManifests.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (var i = 0; i < message.list.length; ++i)
                        $root.protocol.TMManifest.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.history != null && message.hasOwnProperty("history"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.history);
                return writer;
            };
    
            /**
             * Encodes the specified TMManifests message, length delimited. Does not implicitly {@link protocol.TMManifests.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMManifests
             * @static
             * @param {protocol.ITMManifests} message TMManifests message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMManifests.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMManifests message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMManifests
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMManifests} TMManifests
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMManifests.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMManifests();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.protocol.TMManifest.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.history = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TMManifests message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMManifests
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMManifests} TMManifests
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMManifests.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMManifests message.
             * @function verify
             * @memberof protocol.TMManifests
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMManifests.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (var i = 0; i < message.list.length; ++i) {
                        var error = $root.protocol.TMManifest.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                if (message.history != null && message.hasOwnProperty("history"))
                    if (typeof message.history !== "boolean")
                        return "history: boolean expected";
                return null;
            };
    
            /**
             * Creates a TMManifests message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMManifests
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMManifests} TMManifests
             */
            TMManifests.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMManifests)
                    return object;
                var message = new $root.protocol.TMManifests();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".protocol.TMManifests.list: array expected");
                    message.list = [];
                    for (var i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".protocol.TMManifests.list: object expected");
                        message.list[i] = $root.protocol.TMManifest.fromObject(object.list[i]);
                    }
                }
                if (object.history != null)
                    message.history = Boolean(object.history);
                return message;
            };
    
            /**
             * Creates a plain object from a TMManifests message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMManifests
             * @static
             * @param {protocol.TMManifests} message TMManifests
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMManifests.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (options.defaults)
                    object.history = false;
                if (message.list && message.list.length) {
                    object.list = [];
                    for (var j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.protocol.TMManifest.toObject(message.list[j], options);
                }
                if (message.history != null && message.hasOwnProperty("history"))
                    object.history = message.history;
                return object;
            };
    
            /**
             * Converts this TMManifests to JSON.
             * @function toJSON
             * @memberof protocol.TMManifests
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMManifests.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMManifests;
        })();
    
        protocol.TMProofWork = (function() {
    
            /**
             * Properties of a TMProofWork.
             * @memberof protocol
             * @interface ITMProofWork
             * @property {string} token TMProofWork token
             * @property {number|null} [iterations] TMProofWork iterations
             * @property {Uint8Array|null} [target] TMProofWork target
             * @property {Uint8Array|null} [challenge] TMProofWork challenge
             * @property {Uint8Array|null} [response] TMProofWork response
             * @property {protocol.TMProofWork.PowResult|null} [result] TMProofWork result
             */
    
            /**
             * Constructs a new TMProofWork.
             * @memberof protocol
             * @classdesc Represents a TMProofWork.
             * @implements ITMProofWork
             * @constructor
             * @param {protocol.ITMProofWork=} [properties] Properties to set
             */
            function TMProofWork(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMProofWork token.
             * @member {string} token
             * @memberof protocol.TMProofWork
             * @instance
             */
            TMProofWork.prototype.token = "";
    
            /**
             * TMProofWork iterations.
             * @member {number} iterations
             * @memberof protocol.TMProofWork
             * @instance
             */
            TMProofWork.prototype.iterations = 0;
    
            /**
             * TMProofWork target.
             * @member {Uint8Array} target
             * @memberof protocol.TMProofWork
             * @instance
             */
            TMProofWork.prototype.target = $util.newBuffer([]);
    
            /**
             * TMProofWork challenge.
             * @member {Uint8Array} challenge
             * @memberof protocol.TMProofWork
             * @instance
             */
            TMProofWork.prototype.challenge = $util.newBuffer([]);
    
            /**
             * TMProofWork response.
             * @member {Uint8Array} response
             * @memberof protocol.TMProofWork
             * @instance
             */
            TMProofWork.prototype.response = $util.newBuffer([]);
    
            /**
             * TMProofWork result.
             * @member {protocol.TMProofWork.PowResult} result
             * @memberof protocol.TMProofWork
             * @instance
             */
            TMProofWork.prototype.result = 0;
    
            /**
             * Creates a new TMProofWork instance using the specified properties.
             * @function create
             * @memberof protocol.TMProofWork
             * @static
             * @param {protocol.ITMProofWork=} [properties] Properties to set
             * @returns {protocol.TMProofWork} TMProofWork instance
             */
            TMProofWork.create = function create(properties) {
                return new TMProofWork(properties);
            };
    
            /**
             * Encodes the specified TMProofWork message. Does not implicitly {@link protocol.TMProofWork.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMProofWork
             * @static
             * @param {protocol.ITMProofWork} message TMProofWork message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMProofWork.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.iterations != null && message.hasOwnProperty("iterations"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iterations);
                if (message.target != null && message.hasOwnProperty("target"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.target);
                if (message.challenge != null && message.hasOwnProperty("challenge"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.challenge);
                if (message.response != null && message.hasOwnProperty("response"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.response);
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.result);
                return writer;
            };
    
            /**
             * Encodes the specified TMProofWork message, length delimited. Does not implicitly {@link protocol.TMProofWork.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMProofWork
             * @static
             * @param {protocol.ITMProofWork} message TMProofWork message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMProofWork.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMProofWork message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMProofWork
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMProofWork} TMProofWork
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMProofWork.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMProofWork();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.token = reader.string();
                        break;
                    case 2:
                        message.iterations = reader.uint32();
                        break;
                    case 3:
                        message.target = reader.bytes();
                        break;
                    case 4:
                        message.challenge = reader.bytes();
                        break;
                    case 5:
                        message.response = reader.bytes();
                        break;
                    case 6:
                        message.result = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("token"))
                    throw $util.ProtocolError("missing required 'token'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMProofWork message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMProofWork
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMProofWork} TMProofWork
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMProofWork.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMProofWork message.
             * @function verify
             * @memberof protocol.TMProofWork
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMProofWork.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.token))
                    return "token: string expected";
                if (message.iterations != null && message.hasOwnProperty("iterations"))
                    if (!$util.isInteger(message.iterations))
                        return "iterations: integer expected";
                if (message.target != null && message.hasOwnProperty("target"))
                    if (!(message.target && typeof message.target.length === "number" || $util.isString(message.target)))
                        return "target: buffer expected";
                if (message.challenge != null && message.hasOwnProperty("challenge"))
                    if (!(message.challenge && typeof message.challenge.length === "number" || $util.isString(message.challenge)))
                        return "challenge: buffer expected";
                if (message.response != null && message.hasOwnProperty("response"))
                    if (!(message.response && typeof message.response.length === "number" || $util.isString(message.response)))
                        return "response: buffer expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    switch (message.result) {
                    default:
                        return "result: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a TMProofWork message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMProofWork
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMProofWork} TMProofWork
             */
            TMProofWork.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMProofWork)
                    return object;
                var message = new $root.protocol.TMProofWork();
                if (object.token != null)
                    message.token = String(object.token);
                if (object.iterations != null)
                    message.iterations = object.iterations >>> 0;
                if (object.target != null)
                    if (typeof object.target === "string")
                        $util.base64.decode(object.target, message.target = $util.newBuffer($util.base64.length(object.target)), 0);
                    else if (object.target.length)
                        message.target = object.target;
                if (object.challenge != null)
                    if (typeof object.challenge === "string")
                        $util.base64.decode(object.challenge, message.challenge = $util.newBuffer($util.base64.length(object.challenge)), 0);
                    else if (object.challenge.length)
                        message.challenge = object.challenge;
                if (object.response != null)
                    if (typeof object.response === "string")
                        $util.base64.decode(object.response, message.response = $util.newBuffer($util.base64.length(object.response)), 0);
                    else if (object.response.length)
                        message.response = object.response;
                switch (object.result) {
                case "powrOK":
                case 0:
                    message.result = 0;
                    break;
                case "powrREUSED":
                case 1:
                    message.result = 1;
                    break;
                case "powrEXPIRED":
                case 2:
                    message.result = 2;
                    break;
                case "powrTOOEASY":
                case 3:
                    message.result = 3;
                    break;
                case "powrINVALID":
                case 4:
                    message.result = 4;
                    break;
                case "powrDISCONNECT":
                case 5:
                    message.result = 5;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TMProofWork message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMProofWork
             * @static
             * @param {protocol.TMProofWork} message TMProofWork
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMProofWork.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.token = "";
                    object.iterations = 0;
                    if (options.bytes === String)
                        object.target = "";
                    else {
                        object.target = [];
                        if (options.bytes !== Array)
                            object.target = $util.newBuffer(object.target);
                    }
                    if (options.bytes === String)
                        object.challenge = "";
                    else {
                        object.challenge = [];
                        if (options.bytes !== Array)
                            object.challenge = $util.newBuffer(object.challenge);
                    }
                    if (options.bytes === String)
                        object.response = "";
                    else {
                        object.response = [];
                        if (options.bytes !== Array)
                            object.response = $util.newBuffer(object.response);
                    }
                    object.result = options.enums === String ? "powrOK" : 0;
                }
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.iterations != null && message.hasOwnProperty("iterations"))
                    object.iterations = message.iterations;
                if (message.target != null && message.hasOwnProperty("target"))
                    object.target = options.bytes === String ? $util.base64.encode(message.target, 0, message.target.length) : options.bytes === Array ? Array.prototype.slice.call(message.target) : message.target;
                if (message.challenge != null && message.hasOwnProperty("challenge"))
                    object.challenge = options.bytes === String ? $util.base64.encode(message.challenge, 0, message.challenge.length) : options.bytes === Array ? Array.prototype.slice.call(message.challenge) : message.challenge;
                if (message.response != null && message.hasOwnProperty("response"))
                    object.response = options.bytes === String ? $util.base64.encode(message.response, 0, message.response.length) : options.bytes === Array ? Array.prototype.slice.call(message.response) : message.response;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.enums === String ? $root.protocol.TMProofWork.PowResult[message.result] : message.result;
                return object;
            };
    
            /**
             * Converts this TMProofWork to JSON.
             * @function toJSON
             * @memberof protocol.TMProofWork
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMProofWork.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * PowResult enum.
             * @name protocol.TMProofWork.PowResult
             * @enum {string}
             * @property {number} powrOK=0 powrOK value
             * @property {number} powrREUSED=1 powrREUSED value
             * @property {number} powrEXPIRED=2 powrEXPIRED value
             * @property {number} powrTOOEASY=3 powrTOOEASY value
             * @property {number} powrINVALID=4 powrINVALID value
             * @property {number} powrDISCONNECT=5 powrDISCONNECT value
             */
            TMProofWork.PowResult = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "powrOK"] = 0;
                values[valuesById[1] = "powrREUSED"] = 1;
                values[valuesById[2] = "powrEXPIRED"] = 2;
                values[valuesById[3] = "powrTOOEASY"] = 3;
                values[valuesById[4] = "powrINVALID"] = 4;
                values[valuesById[5] = "powrDISCONNECT"] = 5;
                return values;
            })();
    
            return TMProofWork;
        })();
    
        protocol.TMHello = (function() {
    
            /**
             * Properties of a TMHello.
             * @memberof protocol
             * @interface ITMHello
             * @property {number} protoVersion TMHello protoVersion
             * @property {number} protoVersionMin TMHello protoVersionMin
             * @property {Uint8Array} nodePublic TMHello nodePublic
             * @property {Uint8Array} nodeProof TMHello nodeProof
             * @property {string|null} [fullVersion] TMHello fullVersion
             * @property {number|Long|null} [netTime] TMHello netTime
             * @property {number|null} [ipv4Port] TMHello ipv4Port
             * @property {number|null} [ledgerIndex] TMHello ledgerIndex
             * @property {Uint8Array|null} [ledgerClosed] TMHello ledgerClosed
             * @property {Uint8Array|null} [ledgerPrevious] TMHello ledgerPrevious
             * @property {boolean|null} [nodePrivate] TMHello nodePrivate
             * @property {protocol.ITMProofWork|null} [proofOfWork] TMHello proofOfWork
             * @property {boolean|null} [testNet] TMHello testNet
             * @property {number|null} [localIp] TMHello localIp
             * @property {number|null} [remoteIp] TMHello remoteIp
             * @property {string|null} [localIpStr] TMHello localIpStr
             * @property {string|null} [remoteIpStr] TMHello remoteIpStr
             */
    
            /**
             * Constructs a new TMHello.
             * @memberof protocol
             * @classdesc Represents a TMHello.
             * @implements ITMHello
             * @constructor
             * @param {protocol.ITMHello=} [properties] Properties to set
             */
            function TMHello(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMHello protoVersion.
             * @member {number} protoVersion
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.protoVersion = 0;
    
            /**
             * TMHello protoVersionMin.
             * @member {number} protoVersionMin
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.protoVersionMin = 0;
    
            /**
             * TMHello nodePublic.
             * @member {Uint8Array} nodePublic
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.nodePublic = $util.newBuffer([]);
    
            /**
             * TMHello nodeProof.
             * @member {Uint8Array} nodeProof
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.nodeProof = $util.newBuffer([]);
    
            /**
             * TMHello fullVersion.
             * @member {string} fullVersion
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.fullVersion = "";
    
            /**
             * TMHello netTime.
             * @member {number|Long} netTime
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.netTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TMHello ipv4Port.
             * @member {number} ipv4Port
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.ipv4Port = 0;
    
            /**
             * TMHello ledgerIndex.
             * @member {number} ledgerIndex
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.ledgerIndex = 0;
    
            /**
             * TMHello ledgerClosed.
             * @member {Uint8Array} ledgerClosed
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.ledgerClosed = $util.newBuffer([]);
    
            /**
             * TMHello ledgerPrevious.
             * @member {Uint8Array} ledgerPrevious
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.ledgerPrevious = $util.newBuffer([]);
    
            /**
             * TMHello nodePrivate.
             * @member {boolean} nodePrivate
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.nodePrivate = false;
    
            /**
             * TMHello proofOfWork.
             * @member {protocol.ITMProofWork|null|undefined} proofOfWork
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.proofOfWork = null;
    
            /**
             * TMHello testNet.
             * @member {boolean} testNet
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.testNet = false;
    
            /**
             * TMHello localIp.
             * @member {number} localIp
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.localIp = 0;
    
            /**
             * TMHello remoteIp.
             * @member {number} remoteIp
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.remoteIp = 0;
    
            /**
             * TMHello localIpStr.
             * @member {string} localIpStr
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.localIpStr = "";
    
            /**
             * TMHello remoteIpStr.
             * @member {string} remoteIpStr
             * @memberof protocol.TMHello
             * @instance
             */
            TMHello.prototype.remoteIpStr = "";
    
            /**
             * Creates a new TMHello instance using the specified properties.
             * @function create
             * @memberof protocol.TMHello
             * @static
             * @param {protocol.ITMHello=} [properties] Properties to set
             * @returns {protocol.TMHello} TMHello instance
             */
            TMHello.create = function create(properties) {
                return new TMHello(properties);
            };
    
            /**
             * Encodes the specified TMHello message. Does not implicitly {@link protocol.TMHello.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMHello
             * @static
             * @param {protocol.ITMHello} message TMHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMHello.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.protoVersion);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.protoVersionMin);
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.nodePublic);
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.nodeProof);
                if (message.fullVersion != null && message.hasOwnProperty("fullVersion"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.fullVersion);
                if (message.netTime != null && message.hasOwnProperty("netTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.netTime);
                if (message.ipv4Port != null && message.hasOwnProperty("ipv4Port"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.ipv4Port);
                if (message.ledgerIndex != null && message.hasOwnProperty("ledgerIndex"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.ledgerIndex);
                if (message.ledgerClosed != null && message.hasOwnProperty("ledgerClosed"))
                    writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.ledgerClosed);
                if (message.ledgerPrevious != null && message.hasOwnProperty("ledgerPrevious"))
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.ledgerPrevious);
                if (message.nodePrivate != null && message.hasOwnProperty("nodePrivate"))
                    writer.uint32(/* id 11, wireType 0 =*/88).bool(message.nodePrivate);
                if (message.proofOfWork != null && message.hasOwnProperty("proofOfWork"))
                    $root.protocol.TMProofWork.encode(message.proofOfWork, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.testNet != null && message.hasOwnProperty("testNet"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.testNet);
                if (message.localIp != null && message.hasOwnProperty("localIp"))
                    writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.localIp);
                if (message.remoteIp != null && message.hasOwnProperty("remoteIp"))
                    writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.remoteIp);
                if (message.localIpStr != null && message.hasOwnProperty("localIpStr"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.localIpStr);
                if (message.remoteIpStr != null && message.hasOwnProperty("remoteIpStr"))
                    writer.uint32(/* id 17, wireType 2 =*/138).string(message.remoteIpStr);
                return writer;
            };
    
            /**
             * Encodes the specified TMHello message, length delimited. Does not implicitly {@link protocol.TMHello.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMHello
             * @static
             * @param {protocol.ITMHello} message TMHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMHello.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMHello message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMHello} TMHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMHello.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMHello();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.protoVersion = reader.uint32();
                        break;
                    case 2:
                        message.protoVersionMin = reader.uint32();
                        break;
                    case 3:
                        message.nodePublic = reader.bytes();
                        break;
                    case 4:
                        message.nodeProof = reader.bytes();
                        break;
                    case 5:
                        message.fullVersion = reader.string();
                        break;
                    case 6:
                        message.netTime = reader.uint64();
                        break;
                    case 7:
                        message.ipv4Port = reader.uint32();
                        break;
                    case 8:
                        message.ledgerIndex = reader.uint32();
                        break;
                    case 9:
                        message.ledgerClosed = reader.bytes();
                        break;
                    case 10:
                        message.ledgerPrevious = reader.bytes();
                        break;
                    case 11:
                        message.nodePrivate = reader.bool();
                        break;
                    case 12:
                        message.proofOfWork = $root.protocol.TMProofWork.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.testNet = reader.bool();
                        break;
                    case 14:
                        message.localIp = reader.uint32();
                        break;
                    case 15:
                        message.remoteIp = reader.uint32();
                        break;
                    case 16:
                        message.localIpStr = reader.string();
                        break;
                    case 17:
                        message.remoteIpStr = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("protoVersion"))
                    throw $util.ProtocolError("missing required 'protoVersion'", { instance: message });
                if (!message.hasOwnProperty("protoVersionMin"))
                    throw $util.ProtocolError("missing required 'protoVersionMin'", { instance: message });
                if (!message.hasOwnProperty("nodePublic"))
                    throw $util.ProtocolError("missing required 'nodePublic'", { instance: message });
                if (!message.hasOwnProperty("nodeProof"))
                    throw $util.ProtocolError("missing required 'nodeProof'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMHello message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMHello} TMHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMHello.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMHello message.
             * @function verify
             * @memberof protocol.TMHello
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMHello.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.protoVersion))
                    return "protoVersion: integer expected";
                if (!$util.isInteger(message.protoVersionMin))
                    return "protoVersionMin: integer expected";
                if (!(message.nodePublic && typeof message.nodePublic.length === "number" || $util.isString(message.nodePublic)))
                    return "nodePublic: buffer expected";
                if (!(message.nodeProof && typeof message.nodeProof.length === "number" || $util.isString(message.nodeProof)))
                    return "nodeProof: buffer expected";
                if (message.fullVersion != null && message.hasOwnProperty("fullVersion"))
                    if (!$util.isString(message.fullVersion))
                        return "fullVersion: string expected";
                if (message.netTime != null && message.hasOwnProperty("netTime"))
                    if (!$util.isInteger(message.netTime) && !(message.netTime && $util.isInteger(message.netTime.low) && $util.isInteger(message.netTime.high)))
                        return "netTime: integer|Long expected";
                if (message.ipv4Port != null && message.hasOwnProperty("ipv4Port"))
                    if (!$util.isInteger(message.ipv4Port))
                        return "ipv4Port: integer expected";
                if (message.ledgerIndex != null && message.hasOwnProperty("ledgerIndex"))
                    if (!$util.isInteger(message.ledgerIndex))
                        return "ledgerIndex: integer expected";
                if (message.ledgerClosed != null && message.hasOwnProperty("ledgerClosed"))
                    if (!(message.ledgerClosed && typeof message.ledgerClosed.length === "number" || $util.isString(message.ledgerClosed)))
                        return "ledgerClosed: buffer expected";
                if (message.ledgerPrevious != null && message.hasOwnProperty("ledgerPrevious"))
                    if (!(message.ledgerPrevious && typeof message.ledgerPrevious.length === "number" || $util.isString(message.ledgerPrevious)))
                        return "ledgerPrevious: buffer expected";
                if (message.nodePrivate != null && message.hasOwnProperty("nodePrivate"))
                    if (typeof message.nodePrivate !== "boolean")
                        return "nodePrivate: boolean expected";
                if (message.proofOfWork != null && message.hasOwnProperty("proofOfWork")) {
                    var error = $root.protocol.TMProofWork.verify(message.proofOfWork);
                    if (error)
                        return "proofOfWork." + error;
                }
                if (message.testNet != null && message.hasOwnProperty("testNet"))
                    if (typeof message.testNet !== "boolean")
                        return "testNet: boolean expected";
                if (message.localIp != null && message.hasOwnProperty("localIp"))
                    if (!$util.isInteger(message.localIp))
                        return "localIp: integer expected";
                if (message.remoteIp != null && message.hasOwnProperty("remoteIp"))
                    if (!$util.isInteger(message.remoteIp))
                        return "remoteIp: integer expected";
                if (message.localIpStr != null && message.hasOwnProperty("localIpStr"))
                    if (!$util.isString(message.localIpStr))
                        return "localIpStr: string expected";
                if (message.remoteIpStr != null && message.hasOwnProperty("remoteIpStr"))
                    if (!$util.isString(message.remoteIpStr))
                        return "remoteIpStr: string expected";
                return null;
            };
    
            /**
             * Creates a TMHello message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMHello
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMHello} TMHello
             */
            TMHello.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMHello)
                    return object;
                var message = new $root.protocol.TMHello();
                if (object.protoVersion != null)
                    message.protoVersion = object.protoVersion >>> 0;
                if (object.protoVersionMin != null)
                    message.protoVersionMin = object.protoVersionMin >>> 0;
                if (object.nodePublic != null)
                    if (typeof object.nodePublic === "string")
                        $util.base64.decode(object.nodePublic, message.nodePublic = $util.newBuffer($util.base64.length(object.nodePublic)), 0);
                    else if (object.nodePublic.length)
                        message.nodePublic = object.nodePublic;
                if (object.nodeProof != null)
                    if (typeof object.nodeProof === "string")
                        $util.base64.decode(object.nodeProof, message.nodeProof = $util.newBuffer($util.base64.length(object.nodeProof)), 0);
                    else if (object.nodeProof.length)
                        message.nodeProof = object.nodeProof;
                if (object.fullVersion != null)
                    message.fullVersion = String(object.fullVersion);
                if (object.netTime != null)
                    if ($util.Long)
                        (message.netTime = $util.Long.fromValue(object.netTime)).unsigned = true;
                    else if (typeof object.netTime === "string")
                        message.netTime = parseInt(object.netTime, 10);
                    else if (typeof object.netTime === "number")
                        message.netTime = object.netTime;
                    else if (typeof object.netTime === "object")
                        message.netTime = new $util.LongBits(object.netTime.low >>> 0, object.netTime.high >>> 0).toNumber(true);
                if (object.ipv4Port != null)
                    message.ipv4Port = object.ipv4Port >>> 0;
                if (object.ledgerIndex != null)
                    message.ledgerIndex = object.ledgerIndex >>> 0;
                if (object.ledgerClosed != null)
                    if (typeof object.ledgerClosed === "string")
                        $util.base64.decode(object.ledgerClosed, message.ledgerClosed = $util.newBuffer($util.base64.length(object.ledgerClosed)), 0);
                    else if (object.ledgerClosed.length)
                        message.ledgerClosed = object.ledgerClosed;
                if (object.ledgerPrevious != null)
                    if (typeof object.ledgerPrevious === "string")
                        $util.base64.decode(object.ledgerPrevious, message.ledgerPrevious = $util.newBuffer($util.base64.length(object.ledgerPrevious)), 0);
                    else if (object.ledgerPrevious.length)
                        message.ledgerPrevious = object.ledgerPrevious;
                if (object.nodePrivate != null)
                    message.nodePrivate = Boolean(object.nodePrivate);
                if (object.proofOfWork != null) {
                    if (typeof object.proofOfWork !== "object")
                        throw TypeError(".protocol.TMHello.proofOfWork: object expected");
                    message.proofOfWork = $root.protocol.TMProofWork.fromObject(object.proofOfWork);
                }
                if (object.testNet != null)
                    message.testNet = Boolean(object.testNet);
                if (object.localIp != null)
                    message.localIp = object.localIp >>> 0;
                if (object.remoteIp != null)
                    message.remoteIp = object.remoteIp >>> 0;
                if (object.localIpStr != null)
                    message.localIpStr = String(object.localIpStr);
                if (object.remoteIpStr != null)
                    message.remoteIpStr = String(object.remoteIpStr);
                return message;
            };
    
            /**
             * Creates a plain object from a TMHello message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMHello
             * @static
             * @param {protocol.TMHello} message TMHello
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMHello.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.protoVersion = 0;
                    object.protoVersionMin = 0;
                    if (options.bytes === String)
                        object.nodePublic = "";
                    else {
                        object.nodePublic = [];
                        if (options.bytes !== Array)
                            object.nodePublic = $util.newBuffer(object.nodePublic);
                    }
                    if (options.bytes === String)
                        object.nodeProof = "";
                    else {
                        object.nodeProof = [];
                        if (options.bytes !== Array)
                            object.nodeProof = $util.newBuffer(object.nodeProof);
                    }
                    object.fullVersion = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.netTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.netTime = options.longs === String ? "0" : 0;
                    object.ipv4Port = 0;
                    object.ledgerIndex = 0;
                    if (options.bytes === String)
                        object.ledgerClosed = "";
                    else {
                        object.ledgerClosed = [];
                        if (options.bytes !== Array)
                            object.ledgerClosed = $util.newBuffer(object.ledgerClosed);
                    }
                    if (options.bytes === String)
                        object.ledgerPrevious = "";
                    else {
                        object.ledgerPrevious = [];
                        if (options.bytes !== Array)
                            object.ledgerPrevious = $util.newBuffer(object.ledgerPrevious);
                    }
                    object.nodePrivate = false;
                    object.proofOfWork = null;
                    object.testNet = false;
                    object.localIp = 0;
                    object.remoteIp = 0;
                    object.localIpStr = "";
                    object.remoteIpStr = "";
                }
                if (message.protoVersion != null && message.hasOwnProperty("protoVersion"))
                    object.protoVersion = message.protoVersion;
                if (message.protoVersionMin != null && message.hasOwnProperty("protoVersionMin"))
                    object.protoVersionMin = message.protoVersionMin;
                if (message.nodePublic != null && message.hasOwnProperty("nodePublic"))
                    object.nodePublic = options.bytes === String ? $util.base64.encode(message.nodePublic, 0, message.nodePublic.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodePublic) : message.nodePublic;
                if (message.nodeProof != null && message.hasOwnProperty("nodeProof"))
                    object.nodeProof = options.bytes === String ? $util.base64.encode(message.nodeProof, 0, message.nodeProof.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeProof) : message.nodeProof;
                if (message.fullVersion != null && message.hasOwnProperty("fullVersion"))
                    object.fullVersion = message.fullVersion;
                if (message.netTime != null && message.hasOwnProperty("netTime"))
                    if (typeof message.netTime === "number")
                        object.netTime = options.longs === String ? String(message.netTime) : message.netTime;
                    else
                        object.netTime = options.longs === String ? $util.Long.prototype.toString.call(message.netTime) : options.longs === Number ? new $util.LongBits(message.netTime.low >>> 0, message.netTime.high >>> 0).toNumber(true) : message.netTime;
                if (message.ipv4Port != null && message.hasOwnProperty("ipv4Port"))
                    object.ipv4Port = message.ipv4Port;
                if (message.ledgerIndex != null && message.hasOwnProperty("ledgerIndex"))
                    object.ledgerIndex = message.ledgerIndex;
                if (message.ledgerClosed != null && message.hasOwnProperty("ledgerClosed"))
                    object.ledgerClosed = options.bytes === String ? $util.base64.encode(message.ledgerClosed, 0, message.ledgerClosed.length) : options.bytes === Array ? Array.prototype.slice.call(message.ledgerClosed) : message.ledgerClosed;
                if (message.ledgerPrevious != null && message.hasOwnProperty("ledgerPrevious"))
                    object.ledgerPrevious = options.bytes === String ? $util.base64.encode(message.ledgerPrevious, 0, message.ledgerPrevious.length) : options.bytes === Array ? Array.prototype.slice.call(message.ledgerPrevious) : message.ledgerPrevious;
                if (message.nodePrivate != null && message.hasOwnProperty("nodePrivate"))
                    object.nodePrivate = message.nodePrivate;
                if (message.proofOfWork != null && message.hasOwnProperty("proofOfWork"))
                    object.proofOfWork = $root.protocol.TMProofWork.toObject(message.proofOfWork, options);
                if (message.testNet != null && message.hasOwnProperty("testNet"))
                    object.testNet = message.testNet;
                if (message.localIp != null && message.hasOwnProperty("localIp"))
                    object.localIp = message.localIp;
                if (message.remoteIp != null && message.hasOwnProperty("remoteIp"))
                    object.remoteIp = message.remoteIp;
                if (message.localIpStr != null && message.hasOwnProperty("localIpStr"))
                    object.localIpStr = message.localIpStr;
                if (message.remoteIpStr != null && message.hasOwnProperty("remoteIpStr"))
                    object.remoteIpStr = message.remoteIpStr;
                return object;
            };
    
            /**
             * Converts this TMHello to JSON.
             * @function toJSON
             * @memberof protocol.TMHello
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMHello.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMHello;
        })();
    
        protocol.TMClusterNode = (function() {
    
            /**
             * Properties of a TMClusterNode.
             * @memberof protocol
             * @interface ITMClusterNode
             * @property {string} publicKey TMClusterNode publicKey
             * @property {number} reportTime TMClusterNode reportTime
             * @property {number} nodeLoad TMClusterNode nodeLoad
             * @property {string|null} [nodeName] TMClusterNode nodeName
             * @property {string|null} [address] TMClusterNode address
             */
    
            /**
             * Constructs a new TMClusterNode.
             * @memberof protocol
             * @classdesc Represents a TMClusterNode.
             * @implements ITMClusterNode
             * @constructor
             * @param {protocol.ITMClusterNode=} [properties] Properties to set
             */
            function TMClusterNode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMClusterNode publicKey.
             * @member {string} publicKey
             * @memberof protocol.TMClusterNode
             * @instance
             */
            TMClusterNode.prototype.publicKey = "";
    
            /**
             * TMClusterNode reportTime.
             * @member {number} reportTime
             * @memberof protocol.TMClusterNode
             * @instance
             */
            TMClusterNode.prototype.reportTime = 0;
    
            /**
             * TMClusterNode nodeLoad.
             * @member {number} nodeLoad
             * @memberof protocol.TMClusterNode
             * @instance
             */
            TMClusterNode.prototype.nodeLoad = 0;
    
            /**
             * TMClusterNode nodeName.
             * @member {string} nodeName
             * @memberof protocol.TMClusterNode
             * @instance
             */
            TMClusterNode.prototype.nodeName = "";
    
            /**
             * TMClusterNode address.
             * @member {string} address
             * @memberof protocol.TMClusterNode
             * @instance
             */
            TMClusterNode.prototype.address = "";
    
            /**
             * Creates a new TMClusterNode instance using the specified properties.
             * @function create
             * @memberof protocol.TMClusterNode
             * @static
             * @param {protocol.ITMClusterNode=} [properties] Properties to set
             * @returns {protocol.TMClusterNode} TMClusterNode instance
             */
            TMClusterNode.create = function create(properties) {
                return new TMClusterNode(properties);
            };
    
            /**
             * Encodes the specified TMClusterNode message. Does not implicitly {@link protocol.TMClusterNode.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMClusterNode
             * @static
             * @param {protocol.ITMClusterNode} message TMClusterNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMClusterNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.publicKey);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.reportTime);
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.nodeLoad);
                if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.nodeName);
                if (message.address != null && message.hasOwnProperty("address"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.address);
                return writer;
            };
    
            /**
             * Encodes the specified TMClusterNode message, length delimited. Does not implicitly {@link protocol.TMClusterNode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMClusterNode
             * @static
             * @param {protocol.ITMClusterNode} message TMClusterNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMClusterNode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMClusterNode message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMClusterNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMClusterNode} TMClusterNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMClusterNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMClusterNode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.publicKey = reader.string();
                        break;
                    case 2:
                        message.reportTime = reader.uint32();
                        break;
                    case 3:
                        message.nodeLoad = reader.uint32();
                        break;
                    case 4:
                        message.nodeName = reader.string();
                        break;
                    case 5:
                        message.address = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("publicKey"))
                    throw $util.ProtocolError("missing required 'publicKey'", { instance: message });
                if (!message.hasOwnProperty("reportTime"))
                    throw $util.ProtocolError("missing required 'reportTime'", { instance: message });
                if (!message.hasOwnProperty("nodeLoad"))
                    throw $util.ProtocolError("missing required 'nodeLoad'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMClusterNode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMClusterNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMClusterNode} TMClusterNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMClusterNode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMClusterNode message.
             * @function verify
             * @memberof protocol.TMClusterNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMClusterNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.publicKey))
                    return "publicKey: string expected";
                if (!$util.isInteger(message.reportTime))
                    return "reportTime: integer expected";
                if (!$util.isInteger(message.nodeLoad))
                    return "nodeLoad: integer expected";
                if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                    if (!$util.isString(message.nodeName))
                        return "nodeName: string expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                return null;
            };
    
            /**
             * Creates a TMClusterNode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMClusterNode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMClusterNode} TMClusterNode
             */
            TMClusterNode.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMClusterNode)
                    return object;
                var message = new $root.protocol.TMClusterNode();
                if (object.publicKey != null)
                    message.publicKey = String(object.publicKey);
                if (object.reportTime != null)
                    message.reportTime = object.reportTime >>> 0;
                if (object.nodeLoad != null)
                    message.nodeLoad = object.nodeLoad >>> 0;
                if (object.nodeName != null)
                    message.nodeName = String(object.nodeName);
                if (object.address != null)
                    message.address = String(object.address);
                return message;
            };
    
            /**
             * Creates a plain object from a TMClusterNode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMClusterNode
             * @static
             * @param {protocol.TMClusterNode} message TMClusterNode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMClusterNode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.publicKey = "";
                    object.reportTime = 0;
                    object.nodeLoad = 0;
                    object.nodeName = "";
                    object.address = "";
                }
                if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                    object.publicKey = message.publicKey;
                if (message.reportTime != null && message.hasOwnProperty("reportTime"))
                    object.reportTime = message.reportTime;
                if (message.nodeLoad != null && message.hasOwnProperty("nodeLoad"))
                    object.nodeLoad = message.nodeLoad;
                if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                    object.nodeName = message.nodeName;
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                return object;
            };
    
            /**
             * Converts this TMClusterNode to JSON.
             * @function toJSON
             * @memberof protocol.TMClusterNode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMClusterNode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMClusterNode;
        })();
    
        protocol.TMLoadSource = (function() {
    
            /**
             * Properties of a TMLoadSource.
             * @memberof protocol
             * @interface ITMLoadSource
             * @property {string} name TMLoadSource name
             * @property {number} cost TMLoadSource cost
             * @property {number|null} [count] TMLoadSource count
             */
    
            /**
             * Constructs a new TMLoadSource.
             * @memberof protocol
             * @classdesc Represents a TMLoadSource.
             * @implements ITMLoadSource
             * @constructor
             * @param {protocol.ITMLoadSource=} [properties] Properties to set
             */
            function TMLoadSource(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMLoadSource name.
             * @member {string} name
             * @memberof protocol.TMLoadSource
             * @instance
             */
            TMLoadSource.prototype.name = "";
    
            /**
             * TMLoadSource cost.
             * @member {number} cost
             * @memberof protocol.TMLoadSource
             * @instance
             */
            TMLoadSource.prototype.cost = 0;
    
            /**
             * TMLoadSource count.
             * @member {number} count
             * @memberof protocol.TMLoadSource
             * @instance
             */
            TMLoadSource.prototype.count = 0;
    
            /**
             * Creates a new TMLoadSource instance using the specified properties.
             * @function create
             * @memberof protocol.TMLoadSource
             * @static
             * @param {protocol.ITMLoadSource=} [properties] Properties to set
             * @returns {protocol.TMLoadSource} TMLoadSource instance
             */
            TMLoadSource.create = function create(properties) {
                return new TMLoadSource(properties);
            };
    
            /**
             * Encodes the specified TMLoadSource message. Does not implicitly {@link protocol.TMLoadSource.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMLoadSource
             * @static
             * @param {protocol.ITMLoadSource} message TMLoadSource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMLoadSource.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cost);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.count);
                return writer;
            };
    
            /**
             * Encodes the specified TMLoadSource message, length delimited. Does not implicitly {@link protocol.TMLoadSource.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMLoadSource
             * @static
             * @param {protocol.ITMLoadSource} message TMLoadSource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMLoadSource.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMLoadSource message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMLoadSource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMLoadSource} TMLoadSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMLoadSource.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMLoadSource();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.cost = reader.uint32();
                        break;
                    case 3:
                        message.count = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("cost"))
                    throw $util.ProtocolError("missing required 'cost'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMLoadSource message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMLoadSource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMLoadSource} TMLoadSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMLoadSource.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMLoadSource message.
             * @function verify
             * @memberof protocol.TMLoadSource
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMLoadSource.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (!$util.isInteger(message.cost))
                    return "cost: integer expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                return null;
            };
    
            /**
             * Creates a TMLoadSource message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMLoadSource
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMLoadSource} TMLoadSource
             */
            TMLoadSource.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMLoadSource)
                    return object;
                var message = new $root.protocol.TMLoadSource();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.cost != null)
                    message.cost = object.cost >>> 0;
                if (object.count != null)
                    message.count = object.count >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMLoadSource message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMLoadSource
             * @static
             * @param {protocol.TMLoadSource} message TMLoadSource
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMLoadSource.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.cost = 0;
                    object.count = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.cost != null && message.hasOwnProperty("cost"))
                    object.cost = message.cost;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                return object;
            };
    
            /**
             * Converts this TMLoadSource to JSON.
             * @function toJSON
             * @memberof protocol.TMLoadSource
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMLoadSource.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMLoadSource;
        })();
    
        protocol.TMCluster = (function() {
    
            /**
             * Properties of a TMCluster.
             * @memberof protocol
             * @interface ITMCluster
             * @property {Array.<protocol.ITMClusterNode>|null} [clusterNodes] TMCluster clusterNodes
             * @property {Array.<protocol.ITMLoadSource>|null} [loadSources] TMCluster loadSources
             */
    
            /**
             * Constructs a new TMCluster.
             * @memberof protocol
             * @classdesc Represents a TMCluster.
             * @implements ITMCluster
             * @constructor
             * @param {protocol.ITMCluster=} [properties] Properties to set
             */
            function TMCluster(properties) {
                this.clusterNodes = [];
                this.loadSources = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMCluster clusterNodes.
             * @member {Array.<protocol.ITMClusterNode>} clusterNodes
             * @memberof protocol.TMCluster
             * @instance
             */
            TMCluster.prototype.clusterNodes = $util.emptyArray;
    
            /**
             * TMCluster loadSources.
             * @member {Array.<protocol.ITMLoadSource>} loadSources
             * @memberof protocol.TMCluster
             * @instance
             */
            TMCluster.prototype.loadSources = $util.emptyArray;
    
            /**
             * Creates a new TMCluster instance using the specified properties.
             * @function create
             * @memberof protocol.TMCluster
             * @static
             * @param {protocol.ITMCluster=} [properties] Properties to set
             * @returns {protocol.TMCluster} TMCluster instance
             */
            TMCluster.create = function create(properties) {
                return new TMCluster(properties);
            };
    
            /**
             * Encodes the specified TMCluster message. Does not implicitly {@link protocol.TMCluster.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMCluster
             * @static
             * @param {protocol.ITMCluster} message TMCluster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMCluster.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.clusterNodes != null && message.clusterNodes.length)
                    for (var i = 0; i < message.clusterNodes.length; ++i)
                        $root.protocol.TMClusterNode.encode(message.clusterNodes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.loadSources != null && message.loadSources.length)
                    for (var i = 0; i < message.loadSources.length; ++i)
                        $root.protocol.TMLoadSource.encode(message.loadSources[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TMCluster message, length delimited. Does not implicitly {@link protocol.TMCluster.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMCluster
             * @static
             * @param {protocol.ITMCluster} message TMCluster message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMCluster.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMCluster message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMCluster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMCluster} TMCluster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMCluster.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMCluster();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.clusterNodes && message.clusterNodes.length))
                            message.clusterNodes = [];
                        message.clusterNodes.push($root.protocol.TMClusterNode.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        if (!(message.loadSources && message.loadSources.length))
                            message.loadSources = [];
                        message.loadSources.push($root.protocol.TMLoadSource.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TMCluster message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMCluster
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMCluster} TMCluster
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMCluster.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMCluster message.
             * @function verify
             * @memberof protocol.TMCluster
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMCluster.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.clusterNodes != null && message.hasOwnProperty("clusterNodes")) {
                    if (!Array.isArray(message.clusterNodes))
                        return "clusterNodes: array expected";
                    for (var i = 0; i < message.clusterNodes.length; ++i) {
                        var error = $root.protocol.TMClusterNode.verify(message.clusterNodes[i]);
                        if (error)
                            return "clusterNodes." + error;
                    }
                }
                if (message.loadSources != null && message.hasOwnProperty("loadSources")) {
                    if (!Array.isArray(message.loadSources))
                        return "loadSources: array expected";
                    for (var i = 0; i < message.loadSources.length; ++i) {
                        var error = $root.protocol.TMLoadSource.verify(message.loadSources[i]);
                        if (error)
                            return "loadSources." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TMCluster message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMCluster
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMCluster} TMCluster
             */
            TMCluster.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMCluster)
                    return object;
                var message = new $root.protocol.TMCluster();
                if (object.clusterNodes) {
                    if (!Array.isArray(object.clusterNodes))
                        throw TypeError(".protocol.TMCluster.clusterNodes: array expected");
                    message.clusterNodes = [];
                    for (var i = 0; i < object.clusterNodes.length; ++i) {
                        if (typeof object.clusterNodes[i] !== "object")
                            throw TypeError(".protocol.TMCluster.clusterNodes: object expected");
                        message.clusterNodes[i] = $root.protocol.TMClusterNode.fromObject(object.clusterNodes[i]);
                    }
                }
                if (object.loadSources) {
                    if (!Array.isArray(object.loadSources))
                        throw TypeError(".protocol.TMCluster.loadSources: array expected");
                    message.loadSources = [];
                    for (var i = 0; i < object.loadSources.length; ++i) {
                        if (typeof object.loadSources[i] !== "object")
                            throw TypeError(".protocol.TMCluster.loadSources: object expected");
                        message.loadSources[i] = $root.protocol.TMLoadSource.fromObject(object.loadSources[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TMCluster message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMCluster
             * @static
             * @param {protocol.TMCluster} message TMCluster
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMCluster.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.clusterNodes = [];
                    object.loadSources = [];
                }
                if (message.clusterNodes && message.clusterNodes.length) {
                    object.clusterNodes = [];
                    for (var j = 0; j < message.clusterNodes.length; ++j)
                        object.clusterNodes[j] = $root.protocol.TMClusterNode.toObject(message.clusterNodes[j], options);
                }
                if (message.loadSources && message.loadSources.length) {
                    object.loadSources = [];
                    for (var j = 0; j < message.loadSources.length; ++j)
                        object.loadSources[j] = $root.protocol.TMLoadSource.toObject(message.loadSources[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TMCluster to JSON.
             * @function toJSON
             * @memberof protocol.TMCluster
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMCluster.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMCluster;
        })();
    
        protocol.TMGetShardInfo = (function() {
    
            /**
             * Properties of a TMGetShardInfo.
             * @memberof protocol
             * @interface ITMGetShardInfo
             * @property {number} hops TMGetShardInfo hops
             * @property {boolean|null} [lastLink] TMGetShardInfo lastLink
             * @property {Array.<number>|null} [peerchain] TMGetShardInfo peerchain
             */
    
            /**
             * Constructs a new TMGetShardInfo.
             * @memberof protocol
             * @classdesc Represents a TMGetShardInfo.
             * @implements ITMGetShardInfo
             * @constructor
             * @param {protocol.ITMGetShardInfo=} [properties] Properties to set
             */
            function TMGetShardInfo(properties) {
                this.peerchain = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMGetShardInfo hops.
             * @member {number} hops
             * @memberof protocol.TMGetShardInfo
             * @instance
             */
            TMGetShardInfo.prototype.hops = 0;
    
            /**
             * TMGetShardInfo lastLink.
             * @member {boolean} lastLink
             * @memberof protocol.TMGetShardInfo
             * @instance
             */
            TMGetShardInfo.prototype.lastLink = false;
    
            /**
             * TMGetShardInfo peerchain.
             * @member {Array.<number>} peerchain
             * @memberof protocol.TMGetShardInfo
             * @instance
             */
            TMGetShardInfo.prototype.peerchain = $util.emptyArray;
    
            /**
             * Creates a new TMGetShardInfo instance using the specified properties.
             * @function create
             * @memberof protocol.TMGetShardInfo
             * @static
             * @param {protocol.ITMGetShardInfo=} [properties] Properties to set
             * @returns {protocol.TMGetShardInfo} TMGetShardInfo instance
             */
            TMGetShardInfo.create = function create(properties) {
                return new TMGetShardInfo(properties);
            };
    
            /**
             * Encodes the specified TMGetShardInfo message. Does not implicitly {@link protocol.TMGetShardInfo.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMGetShardInfo
             * @static
             * @param {protocol.ITMGetShardInfo} message TMGetShardInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMGetShardInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.hops);
                if (message.lastLink != null && message.hasOwnProperty("lastLink"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.lastLink);
                if (message.peerchain != null && message.peerchain.length)
                    for (var i = 0; i < message.peerchain.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.peerchain[i]);
                return writer;
            };
    
            /**
             * Encodes the specified TMGetShardInfo message, length delimited. Does not implicitly {@link protocol.TMGetShardInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMGetShardInfo
             * @static
             * @param {protocol.ITMGetShardInfo} message TMGetShardInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMGetShardInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMGetShardInfo message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMGetShardInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMGetShardInfo} TMGetShardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMGetShardInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMGetShardInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.hops = reader.uint32();
                        break;
                    case 2:
                        message.lastLink = reader.bool();
                        break;
                    case 3:
                        if (!(message.peerchain && message.peerchain.length))
                            message.peerchain = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.peerchain.push(reader.uint32());
                        } else
                            message.peerchain.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("hops"))
                    throw $util.ProtocolError("missing required 'hops'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMGetShardInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMGetShardInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMGetShardInfo} TMGetShardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMGetShardInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMGetShardInfo message.
             * @function verify
             * @memberof protocol.TMGetShardInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMGetShardInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.hops))
                    return "hops: integer expected";
                if (message.lastLink != null && message.hasOwnProperty("lastLink"))
                    if (typeof message.lastLink !== "boolean")
                        return "lastLink: boolean expected";
                if (message.peerchain != null && message.hasOwnProperty("peerchain")) {
                    if (!Array.isArray(message.peerchain))
                        return "peerchain: array expected";
                    for (var i = 0; i < message.peerchain.length; ++i)
                        if (!$util.isInteger(message.peerchain[i]))
                            return "peerchain: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a TMGetShardInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMGetShardInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMGetShardInfo} TMGetShardInfo
             */
            TMGetShardInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMGetShardInfo)
                    return object;
                var message = new $root.protocol.TMGetShardInfo();
                if (object.hops != null)
                    message.hops = object.hops >>> 0;
                if (object.lastLink != null)
                    message.lastLink = Boolean(object.lastLink);
                if (object.peerchain) {
                    if (!Array.isArray(object.peerchain))
                        throw TypeError(".protocol.TMGetShardInfo.peerchain: array expected");
                    message.peerchain = [];
                    for (var i = 0; i < object.peerchain.length; ++i)
                        message.peerchain[i] = object.peerchain[i] >>> 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TMGetShardInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMGetShardInfo
             * @static
             * @param {protocol.TMGetShardInfo} message TMGetShardInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMGetShardInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.peerchain = [];
                if (options.defaults) {
                    object.hops = 0;
                    object.lastLink = false;
                }
                if (message.hops != null && message.hasOwnProperty("hops"))
                    object.hops = message.hops;
                if (message.lastLink != null && message.hasOwnProperty("lastLink"))
                    object.lastLink = message.lastLink;
                if (message.peerchain && message.peerchain.length) {
                    object.peerchain = [];
                    for (var j = 0; j < message.peerchain.length; ++j)
                        object.peerchain[j] = message.peerchain[j];
                }
                return object;
            };
    
            /**
             * Converts this TMGetShardInfo to JSON.
             * @function toJSON
             * @memberof protocol.TMGetShardInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMGetShardInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMGetShardInfo;
        })();
    
        protocol.TMShardInfo = (function() {
    
            /**
             * Properties of a TMShardInfo.
             * @memberof protocol
             * @interface ITMShardInfo
             * @property {string} shardIndexes TMShardInfo shardIndexes
             * @property {Uint8Array|null} [nodePubKey] TMShardInfo nodePubKey
             * @property {string|null} [endpoint] TMShardInfo endpoint
             * @property {boolean|null} [lastLink] TMShardInfo lastLink
             * @property {Array.<number>|null} [peerchain] TMShardInfo peerchain
             */
    
            /**
             * Constructs a new TMShardInfo.
             * @memberof protocol
             * @classdesc Represents a TMShardInfo.
             * @implements ITMShardInfo
             * @constructor
             * @param {protocol.ITMShardInfo=} [properties] Properties to set
             */
            function TMShardInfo(properties) {
                this.peerchain = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMShardInfo shardIndexes.
             * @member {string} shardIndexes
             * @memberof protocol.TMShardInfo
             * @instance
             */
            TMShardInfo.prototype.shardIndexes = "";
    
            /**
             * TMShardInfo nodePubKey.
             * @member {Uint8Array} nodePubKey
             * @memberof protocol.TMShardInfo
             * @instance
             */
            TMShardInfo.prototype.nodePubKey = $util.newBuffer([]);
    
            /**
             * TMShardInfo endpoint.
             * @member {string} endpoint
             * @memberof protocol.TMShardInfo
             * @instance
             */
            TMShardInfo.prototype.endpoint = "";
    
            /**
             * TMShardInfo lastLink.
             * @member {boolean} lastLink
             * @memberof protocol.TMShardInfo
             * @instance
             */
            TMShardInfo.prototype.lastLink = false;
    
            /**
             * TMShardInfo peerchain.
             * @member {Array.<number>} peerchain
             * @memberof protocol.TMShardInfo
             * @instance
             */
            TMShardInfo.prototype.peerchain = $util.emptyArray;
    
            /**
             * Creates a new TMShardInfo instance using the specified properties.
             * @function create
             * @memberof protocol.TMShardInfo
             * @static
             * @param {protocol.ITMShardInfo=} [properties] Properties to set
             * @returns {protocol.TMShardInfo} TMShardInfo instance
             */
            TMShardInfo.create = function create(properties) {
                return new TMShardInfo(properties);
            };
    
            /**
             * Encodes the specified TMShardInfo message. Does not implicitly {@link protocol.TMShardInfo.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMShardInfo
             * @static
             * @param {protocol.ITMShardInfo} message TMShardInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMShardInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.shardIndexes);
                if (message.nodePubKey != null && message.hasOwnProperty("nodePubKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.nodePubKey);
                if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.endpoint);
                if (message.lastLink != null && message.hasOwnProperty("lastLink"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.lastLink);
                if (message.peerchain != null && message.peerchain.length)
                    for (var i = 0; i < message.peerchain.length; ++i)
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.peerchain[i]);
                return writer;
            };
    
            /**
             * Encodes the specified TMShardInfo message, length delimited. Does not implicitly {@link protocol.TMShardInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMShardInfo
             * @static
             * @param {protocol.ITMShardInfo} message TMShardInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMShardInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMShardInfo message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMShardInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMShardInfo} TMShardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMShardInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMShardInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.shardIndexes = reader.string();
                        break;
                    case 2:
                        message.nodePubKey = reader.bytes();
                        break;
                    case 3:
                        message.endpoint = reader.string();
                        break;
                    case 4:
                        message.lastLink = reader.bool();
                        break;
                    case 5:
                        if (!(message.peerchain && message.peerchain.length))
                            message.peerchain = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.peerchain.push(reader.uint32());
                        } else
                            message.peerchain.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("shardIndexes"))
                    throw $util.ProtocolError("missing required 'shardIndexes'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMShardInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMShardInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMShardInfo} TMShardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMShardInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMShardInfo message.
             * @function verify
             * @memberof protocol.TMShardInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMShardInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.shardIndexes))
                    return "shardIndexes: string expected";
                if (message.nodePubKey != null && message.hasOwnProperty("nodePubKey"))
                    if (!(message.nodePubKey && typeof message.nodePubKey.length === "number" || $util.isString(message.nodePubKey)))
                        return "nodePubKey: buffer expected";
                if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                    if (!$util.isString(message.endpoint))
                        return "endpoint: string expected";
                if (message.lastLink != null && message.hasOwnProperty("lastLink"))
                    if (typeof message.lastLink !== "boolean")
                        return "lastLink: boolean expected";
                if (message.peerchain != null && message.hasOwnProperty("peerchain")) {
                    if (!Array.isArray(message.peerchain))
                        return "peerchain: array expected";
                    for (var i = 0; i < message.peerchain.length; ++i)
                        if (!$util.isInteger(message.peerchain[i]))
                            return "peerchain: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a TMShardInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMShardInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMShardInfo} TMShardInfo
             */
            TMShardInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMShardInfo)
                    return object;
                var message = new $root.protocol.TMShardInfo();
                if (object.shardIndexes != null)
                    message.shardIndexes = String(object.shardIndexes);
                if (object.nodePubKey != null)
                    if (typeof object.nodePubKey === "string")
                        $util.base64.decode(object.nodePubKey, message.nodePubKey = $util.newBuffer($util.base64.length(object.nodePubKey)), 0);
                    else if (object.nodePubKey.length)
                        message.nodePubKey = object.nodePubKey;
                if (object.endpoint != null)
                    message.endpoint = String(object.endpoint);
                if (object.lastLink != null)
                    message.lastLink = Boolean(object.lastLink);
                if (object.peerchain) {
                    if (!Array.isArray(object.peerchain))
                        throw TypeError(".protocol.TMShardInfo.peerchain: array expected");
                    message.peerchain = [];
                    for (var i = 0; i < object.peerchain.length; ++i)
                        message.peerchain[i] = object.peerchain[i] >>> 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TMShardInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMShardInfo
             * @static
             * @param {protocol.TMShardInfo} message TMShardInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMShardInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.peerchain = [];
                if (options.defaults) {
                    object.shardIndexes = "";
                    if (options.bytes === String)
                        object.nodePubKey = "";
                    else {
                        object.nodePubKey = [];
                        if (options.bytes !== Array)
                            object.nodePubKey = $util.newBuffer(object.nodePubKey);
                    }
                    object.endpoint = "";
                    object.lastLink = false;
                }
                if (message.shardIndexes != null && message.hasOwnProperty("shardIndexes"))
                    object.shardIndexes = message.shardIndexes;
                if (message.nodePubKey != null && message.hasOwnProperty("nodePubKey"))
                    object.nodePubKey = options.bytes === String ? $util.base64.encode(message.nodePubKey, 0, message.nodePubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodePubKey) : message.nodePubKey;
                if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                    object.endpoint = message.endpoint;
                if (message.lastLink != null && message.hasOwnProperty("lastLink"))
                    object.lastLink = message.lastLink;
                if (message.peerchain && message.peerchain.length) {
                    object.peerchain = [];
                    for (var j = 0; j < message.peerchain.length; ++j)
                        object.peerchain[j] = message.peerchain[j];
                }
                return object;
            };
    
            /**
             * Converts this TMShardInfo to JSON.
             * @function toJSON
             * @memberof protocol.TMShardInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMShardInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMShardInfo;
        })();
    
        /**
         * TransactionStatus enum.
         * @name protocol.TransactionStatus
         * @enum {string}
         * @property {number} tsNEW=1 tsNEW value
         * @property {number} tsCURRENT=2 tsCURRENT value
         * @property {number} tsCOMMITED=3 tsCOMMITED value
         * @property {number} tsREJECT_CONFLICT=4 tsREJECT_CONFLICT value
         * @property {number} tsREJECT_INVALID=5 tsREJECT_INVALID value
         * @property {number} tsREJECT_FUNDS=6 tsREJECT_FUNDS value
         * @property {number} tsHELD_SEQ=7 tsHELD_SEQ value
         * @property {number} tsHELD_LEDGER=8 tsHELD_LEDGER value
         */
        protocol.TransactionStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "tsNEW"] = 1;
            values[valuesById[2] = "tsCURRENT"] = 2;
            values[valuesById[3] = "tsCOMMITED"] = 3;
            values[valuesById[4] = "tsREJECT_CONFLICT"] = 4;
            values[valuesById[5] = "tsREJECT_INVALID"] = 5;
            values[valuesById[6] = "tsREJECT_FUNDS"] = 6;
            values[valuesById[7] = "tsHELD_SEQ"] = 7;
            values[valuesById[8] = "tsHELD_LEDGER"] = 8;
            return values;
        })();
    
        protocol.TMTransaction = (function() {
    
            /**
             * Properties of a TMTransaction.
             * @memberof protocol
             * @interface ITMTransaction
             * @property {Uint8Array} rawTransaction TMTransaction rawTransaction
             * @property {protocol.TransactionStatus} status TMTransaction status
             * @property {number|Long|null} [receiveTimestamp] TMTransaction receiveTimestamp
             * @property {boolean|null} [deferred] TMTransaction deferred
             */
    
            /**
             * Constructs a new TMTransaction.
             * @memberof protocol
             * @classdesc Represents a TMTransaction.
             * @implements ITMTransaction
             * @constructor
             * @param {protocol.ITMTransaction=} [properties] Properties to set
             */
            function TMTransaction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMTransaction rawTransaction.
             * @member {Uint8Array} rawTransaction
             * @memberof protocol.TMTransaction
             * @instance
             */
            TMTransaction.prototype.rawTransaction = $util.newBuffer([]);
    
            /**
             * TMTransaction status.
             * @member {protocol.TransactionStatus} status
             * @memberof protocol.TMTransaction
             * @instance
             */
            TMTransaction.prototype.status = 1;
    
            /**
             * TMTransaction receiveTimestamp.
             * @member {number|Long} receiveTimestamp
             * @memberof protocol.TMTransaction
             * @instance
             */
            TMTransaction.prototype.receiveTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TMTransaction deferred.
             * @member {boolean} deferred
             * @memberof protocol.TMTransaction
             * @instance
             */
            TMTransaction.prototype.deferred = false;
    
            /**
             * Creates a new TMTransaction instance using the specified properties.
             * @function create
             * @memberof protocol.TMTransaction
             * @static
             * @param {protocol.ITMTransaction=} [properties] Properties to set
             * @returns {protocol.TMTransaction} TMTransaction instance
             */
            TMTransaction.create = function create(properties) {
                return new TMTransaction(properties);
            };
    
            /**
             * Encodes the specified TMTransaction message. Does not implicitly {@link protocol.TMTransaction.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMTransaction
             * @static
             * @param {protocol.ITMTransaction} message TMTransaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMTransaction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.rawTransaction);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                if (message.receiveTimestamp != null && message.hasOwnProperty("receiveTimestamp"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.receiveTimestamp);
                if (message.deferred != null && message.hasOwnProperty("deferred"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.deferred);
                return writer;
            };
    
            /**
             * Encodes the specified TMTransaction message, length delimited. Does not implicitly {@link protocol.TMTransaction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMTransaction
             * @static
             * @param {protocol.ITMTransaction} message TMTransaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMTransaction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMTransaction message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMTransaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMTransaction} TMTransaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMTransaction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMTransaction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.rawTransaction = reader.bytes();
                        break;
                    case 2:
                        message.status = reader.int32();
                        break;
                    case 3:
                        message.receiveTimestamp = reader.uint64();
                        break;
                    case 4:
                        message.deferred = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("rawTransaction"))
                    throw $util.ProtocolError("missing required 'rawTransaction'", { instance: message });
                if (!message.hasOwnProperty("status"))
                    throw $util.ProtocolError("missing required 'status'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMTransaction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMTransaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMTransaction} TMTransaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMTransaction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMTransaction message.
             * @function verify
             * @memberof protocol.TMTransaction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMTransaction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!(message.rawTransaction && typeof message.rawTransaction.length === "number" || $util.isString(message.rawTransaction)))
                    return "rawTransaction: buffer expected";
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
                if (message.receiveTimestamp != null && message.hasOwnProperty("receiveTimestamp"))
                    if (!$util.isInteger(message.receiveTimestamp) && !(message.receiveTimestamp && $util.isInteger(message.receiveTimestamp.low) && $util.isInteger(message.receiveTimestamp.high)))
                        return "receiveTimestamp: integer|Long expected";
                if (message.deferred != null && message.hasOwnProperty("deferred"))
                    if (typeof message.deferred !== "boolean")
                        return "deferred: boolean expected";
                return null;
            };
    
            /**
             * Creates a TMTransaction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMTransaction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMTransaction} TMTransaction
             */
            TMTransaction.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMTransaction)
                    return object;
                var message = new $root.protocol.TMTransaction();
                if (object.rawTransaction != null)
                    if (typeof object.rawTransaction === "string")
                        $util.base64.decode(object.rawTransaction, message.rawTransaction = $util.newBuffer($util.base64.length(object.rawTransaction)), 0);
                    else if (object.rawTransaction.length)
                        message.rawTransaction = object.rawTransaction;
                switch (object.status) {
                case "tsNEW":
                case 1:
                    message.status = 1;
                    break;
                case "tsCURRENT":
                case 2:
                    message.status = 2;
                    break;
                case "tsCOMMITED":
                case 3:
                    message.status = 3;
                    break;
                case "tsREJECT_CONFLICT":
                case 4:
                    message.status = 4;
                    break;
                case "tsREJECT_INVALID":
                case 5:
                    message.status = 5;
                    break;
                case "tsREJECT_FUNDS":
                case 6:
                    message.status = 6;
                    break;
                case "tsHELD_SEQ":
                case 7:
                    message.status = 7;
                    break;
                case "tsHELD_LEDGER":
                case 8:
                    message.status = 8;
                    break;
                }
                if (object.receiveTimestamp != null)
                    if ($util.Long)
                        (message.receiveTimestamp = $util.Long.fromValue(object.receiveTimestamp)).unsigned = true;
                    else if (typeof object.receiveTimestamp === "string")
                        message.receiveTimestamp = parseInt(object.receiveTimestamp, 10);
                    else if (typeof object.receiveTimestamp === "number")
                        message.receiveTimestamp = object.receiveTimestamp;
                    else if (typeof object.receiveTimestamp === "object")
                        message.receiveTimestamp = new $util.LongBits(object.receiveTimestamp.low >>> 0, object.receiveTimestamp.high >>> 0).toNumber(true);
                if (object.deferred != null)
                    message.deferred = Boolean(object.deferred);
                return message;
            };
    
            /**
             * Creates a plain object from a TMTransaction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMTransaction
             * @static
             * @param {protocol.TMTransaction} message TMTransaction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMTransaction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.rawTransaction = "";
                    else {
                        object.rawTransaction = [];
                        if (options.bytes !== Array)
                            object.rawTransaction = $util.newBuffer(object.rawTransaction);
                    }
                    object.status = options.enums === String ? "tsNEW" : 1;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.receiveTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.receiveTimestamp = options.longs === String ? "0" : 0;
                    object.deferred = false;
                }
                if (message.rawTransaction != null && message.hasOwnProperty("rawTransaction"))
                    object.rawTransaction = options.bytes === String ? $util.base64.encode(message.rawTransaction, 0, message.rawTransaction.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawTransaction) : message.rawTransaction;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.protocol.TransactionStatus[message.status] : message.status;
                if (message.receiveTimestamp != null && message.hasOwnProperty("receiveTimestamp"))
                    if (typeof message.receiveTimestamp === "number")
                        object.receiveTimestamp = options.longs === String ? String(message.receiveTimestamp) : message.receiveTimestamp;
                    else
                        object.receiveTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.receiveTimestamp) : options.longs === Number ? new $util.LongBits(message.receiveTimestamp.low >>> 0, message.receiveTimestamp.high >>> 0).toNumber(true) : message.receiveTimestamp;
                if (message.deferred != null && message.hasOwnProperty("deferred"))
                    object.deferred = message.deferred;
                return object;
            };
    
            /**
             * Converts this TMTransaction to JSON.
             * @function toJSON
             * @memberof protocol.TMTransaction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMTransaction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMTransaction;
        })();
    
        /**
         * NodeStatus enum.
         * @name protocol.NodeStatus
         * @enum {string}
         * @property {number} nsCONNECTING=1 nsCONNECTING value
         * @property {number} nsCONNECTED=2 nsCONNECTED value
         * @property {number} nsMONITORING=3 nsMONITORING value
         * @property {number} nsVALIDATING=4 nsVALIDATING value
         * @property {number} nsSHUTTING=5 nsSHUTTING value
         */
        protocol.NodeStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "nsCONNECTING"] = 1;
            values[valuesById[2] = "nsCONNECTED"] = 2;
            values[valuesById[3] = "nsMONITORING"] = 3;
            values[valuesById[4] = "nsVALIDATING"] = 4;
            values[valuesById[5] = "nsSHUTTING"] = 5;
            return values;
        })();
    
        /**
         * NodeEvent enum.
         * @name protocol.NodeEvent
         * @enum {string}
         * @property {number} neCLOSING_LEDGER=1 neCLOSING_LEDGER value
         * @property {number} neACCEPTED_LEDGER=2 neACCEPTED_LEDGER value
         * @property {number} neSWITCHED_LEDGER=3 neSWITCHED_LEDGER value
         * @property {number} neLOST_SYNC=4 neLOST_SYNC value
         */
        protocol.NodeEvent = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "neCLOSING_LEDGER"] = 1;
            values[valuesById[2] = "neACCEPTED_LEDGER"] = 2;
            values[valuesById[3] = "neSWITCHED_LEDGER"] = 3;
            values[valuesById[4] = "neLOST_SYNC"] = 4;
            return values;
        })();
    
        protocol.TMStatusChange = (function() {
    
            /**
             * Properties of a TMStatusChange.
             * @memberof protocol
             * @interface ITMStatusChange
             * @property {protocol.NodeStatus|null} [newStatus] TMStatusChange newStatus
             * @property {protocol.NodeEvent|null} [newEvent] TMStatusChange newEvent
             * @property {number|null} [ledgerSeq] TMStatusChange ledgerSeq
             * @property {Uint8Array|null} [ledgerHash] TMStatusChange ledgerHash
             * @property {Uint8Array|null} [ledgerHashPrevious] TMStatusChange ledgerHashPrevious
             * @property {number|Long|null} [networkTime] TMStatusChange networkTime
             * @property {number|null} [firstSeq] TMStatusChange firstSeq
             * @property {number|null} [lastSeq] TMStatusChange lastSeq
             */
    
            /**
             * Constructs a new TMStatusChange.
             * @memberof protocol
             * @classdesc Represents a TMStatusChange.
             * @implements ITMStatusChange
             * @constructor
             * @param {protocol.ITMStatusChange=} [properties] Properties to set
             */
            function TMStatusChange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMStatusChange newStatus.
             * @member {protocol.NodeStatus} newStatus
             * @memberof protocol.TMStatusChange
             * @instance
             */
            TMStatusChange.prototype.newStatus = 1;
    
            /**
             * TMStatusChange newEvent.
             * @member {protocol.NodeEvent} newEvent
             * @memberof protocol.TMStatusChange
             * @instance
             */
            TMStatusChange.prototype.newEvent = 1;
    
            /**
             * TMStatusChange ledgerSeq.
             * @member {number} ledgerSeq
             * @memberof protocol.TMStatusChange
             * @instance
             */
            TMStatusChange.prototype.ledgerSeq = 0;
    
            /**
             * TMStatusChange ledgerHash.
             * @member {Uint8Array} ledgerHash
             * @memberof protocol.TMStatusChange
             * @instance
             */
            TMStatusChange.prototype.ledgerHash = $util.newBuffer([]);
    
            /**
             * TMStatusChange ledgerHashPrevious.
             * @member {Uint8Array} ledgerHashPrevious
             * @memberof protocol.TMStatusChange
             * @instance
             */
            TMStatusChange.prototype.ledgerHashPrevious = $util.newBuffer([]);
    
            /**
             * TMStatusChange networkTime.
             * @member {number|Long} networkTime
             * @memberof protocol.TMStatusChange
             * @instance
             */
            TMStatusChange.prototype.networkTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TMStatusChange firstSeq.
             * @member {number} firstSeq
             * @memberof protocol.TMStatusChange
             * @instance
             */
            TMStatusChange.prototype.firstSeq = 0;
    
            /**
             * TMStatusChange lastSeq.
             * @member {number} lastSeq
             * @memberof protocol.TMStatusChange
             * @instance
             */
            TMStatusChange.prototype.lastSeq = 0;
    
            /**
             * Creates a new TMStatusChange instance using the specified properties.
             * @function create
             * @memberof protocol.TMStatusChange
             * @static
             * @param {protocol.ITMStatusChange=} [properties] Properties to set
             * @returns {protocol.TMStatusChange} TMStatusChange instance
             */
            TMStatusChange.create = function create(properties) {
                return new TMStatusChange(properties);
            };
    
            /**
             * Encodes the specified TMStatusChange message. Does not implicitly {@link protocol.TMStatusChange.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMStatusChange
             * @static
             * @param {protocol.ITMStatusChange} message TMStatusChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMStatusChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.newStatus != null && message.hasOwnProperty("newStatus"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.newStatus);
                if (message.newEvent != null && message.hasOwnProperty("newEvent"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.newEvent);
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.ledgerSeq);
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ledgerHash);
                if (message.ledgerHashPrevious != null && message.hasOwnProperty("ledgerHashPrevious"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.ledgerHashPrevious);
                if (message.networkTime != null && message.hasOwnProperty("networkTime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.networkTime);
                if (message.firstSeq != null && message.hasOwnProperty("firstSeq"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.firstSeq);
                if (message.lastSeq != null && message.hasOwnProperty("lastSeq"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.lastSeq);
                return writer;
            };
    
            /**
             * Encodes the specified TMStatusChange message, length delimited. Does not implicitly {@link protocol.TMStatusChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMStatusChange
             * @static
             * @param {protocol.ITMStatusChange} message TMStatusChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMStatusChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMStatusChange message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMStatusChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMStatusChange} TMStatusChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMStatusChange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMStatusChange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.newStatus = reader.int32();
                        break;
                    case 2:
                        message.newEvent = reader.int32();
                        break;
                    case 3:
                        message.ledgerSeq = reader.uint32();
                        break;
                    case 4:
                        message.ledgerHash = reader.bytes();
                        break;
                    case 5:
                        message.ledgerHashPrevious = reader.bytes();
                        break;
                    case 6:
                        message.networkTime = reader.uint64();
                        break;
                    case 7:
                        message.firstSeq = reader.uint32();
                        break;
                    case 8:
                        message.lastSeq = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TMStatusChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMStatusChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMStatusChange} TMStatusChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMStatusChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMStatusChange message.
             * @function verify
             * @memberof protocol.TMStatusChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMStatusChange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.newStatus != null && message.hasOwnProperty("newStatus"))
                    switch (message.newStatus) {
                    default:
                        return "newStatus: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                if (message.newEvent != null && message.hasOwnProperty("newEvent"))
                    switch (message.newEvent) {
                    default:
                        return "newEvent: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    if (!$util.isInteger(message.ledgerSeq))
                        return "ledgerSeq: integer expected";
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    if (!(message.ledgerHash && typeof message.ledgerHash.length === "number" || $util.isString(message.ledgerHash)))
                        return "ledgerHash: buffer expected";
                if (message.ledgerHashPrevious != null && message.hasOwnProperty("ledgerHashPrevious"))
                    if (!(message.ledgerHashPrevious && typeof message.ledgerHashPrevious.length === "number" || $util.isString(message.ledgerHashPrevious)))
                        return "ledgerHashPrevious: buffer expected";
                if (message.networkTime != null && message.hasOwnProperty("networkTime"))
                    if (!$util.isInteger(message.networkTime) && !(message.networkTime && $util.isInteger(message.networkTime.low) && $util.isInteger(message.networkTime.high)))
                        return "networkTime: integer|Long expected";
                if (message.firstSeq != null && message.hasOwnProperty("firstSeq"))
                    if (!$util.isInteger(message.firstSeq))
                        return "firstSeq: integer expected";
                if (message.lastSeq != null && message.hasOwnProperty("lastSeq"))
                    if (!$util.isInteger(message.lastSeq))
                        return "lastSeq: integer expected";
                return null;
            };
    
            /**
             * Creates a TMStatusChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMStatusChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMStatusChange} TMStatusChange
             */
            TMStatusChange.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMStatusChange)
                    return object;
                var message = new $root.protocol.TMStatusChange();
                switch (object.newStatus) {
                case "nsCONNECTING":
                case 1:
                    message.newStatus = 1;
                    break;
                case "nsCONNECTED":
                case 2:
                    message.newStatus = 2;
                    break;
                case "nsMONITORING":
                case 3:
                    message.newStatus = 3;
                    break;
                case "nsVALIDATING":
                case 4:
                    message.newStatus = 4;
                    break;
                case "nsSHUTTING":
                case 5:
                    message.newStatus = 5;
                    break;
                }
                switch (object.newEvent) {
                case "neCLOSING_LEDGER":
                case 1:
                    message.newEvent = 1;
                    break;
                case "neACCEPTED_LEDGER":
                case 2:
                    message.newEvent = 2;
                    break;
                case "neSWITCHED_LEDGER":
                case 3:
                    message.newEvent = 3;
                    break;
                case "neLOST_SYNC":
                case 4:
                    message.newEvent = 4;
                    break;
                }
                if (object.ledgerSeq != null)
                    message.ledgerSeq = object.ledgerSeq >>> 0;
                if (object.ledgerHash != null)
                    if (typeof object.ledgerHash === "string")
                        $util.base64.decode(object.ledgerHash, message.ledgerHash = $util.newBuffer($util.base64.length(object.ledgerHash)), 0);
                    else if (object.ledgerHash.length)
                        message.ledgerHash = object.ledgerHash;
                if (object.ledgerHashPrevious != null)
                    if (typeof object.ledgerHashPrevious === "string")
                        $util.base64.decode(object.ledgerHashPrevious, message.ledgerHashPrevious = $util.newBuffer($util.base64.length(object.ledgerHashPrevious)), 0);
                    else if (object.ledgerHashPrevious.length)
                        message.ledgerHashPrevious = object.ledgerHashPrevious;
                if (object.networkTime != null)
                    if ($util.Long)
                        (message.networkTime = $util.Long.fromValue(object.networkTime)).unsigned = true;
                    else if (typeof object.networkTime === "string")
                        message.networkTime = parseInt(object.networkTime, 10);
                    else if (typeof object.networkTime === "number")
                        message.networkTime = object.networkTime;
                    else if (typeof object.networkTime === "object")
                        message.networkTime = new $util.LongBits(object.networkTime.low >>> 0, object.networkTime.high >>> 0).toNumber(true);
                if (object.firstSeq != null)
                    message.firstSeq = object.firstSeq >>> 0;
                if (object.lastSeq != null)
                    message.lastSeq = object.lastSeq >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMStatusChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMStatusChange
             * @static
             * @param {protocol.TMStatusChange} message TMStatusChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMStatusChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.newStatus = options.enums === String ? "nsCONNECTING" : 1;
                    object.newEvent = options.enums === String ? "neCLOSING_LEDGER" : 1;
                    object.ledgerSeq = 0;
                    if (options.bytes === String)
                        object.ledgerHash = "";
                    else {
                        object.ledgerHash = [];
                        if (options.bytes !== Array)
                            object.ledgerHash = $util.newBuffer(object.ledgerHash);
                    }
                    if (options.bytes === String)
                        object.ledgerHashPrevious = "";
                    else {
                        object.ledgerHashPrevious = [];
                        if (options.bytes !== Array)
                            object.ledgerHashPrevious = $util.newBuffer(object.ledgerHashPrevious);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.networkTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.networkTime = options.longs === String ? "0" : 0;
                    object.firstSeq = 0;
                    object.lastSeq = 0;
                }
                if (message.newStatus != null && message.hasOwnProperty("newStatus"))
                    object.newStatus = options.enums === String ? $root.protocol.NodeStatus[message.newStatus] : message.newStatus;
                if (message.newEvent != null && message.hasOwnProperty("newEvent"))
                    object.newEvent = options.enums === String ? $root.protocol.NodeEvent[message.newEvent] : message.newEvent;
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    object.ledgerSeq = message.ledgerSeq;
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    object.ledgerHash = options.bytes === String ? $util.base64.encode(message.ledgerHash, 0, message.ledgerHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.ledgerHash) : message.ledgerHash;
                if (message.ledgerHashPrevious != null && message.hasOwnProperty("ledgerHashPrevious"))
                    object.ledgerHashPrevious = options.bytes === String ? $util.base64.encode(message.ledgerHashPrevious, 0, message.ledgerHashPrevious.length) : options.bytes === Array ? Array.prototype.slice.call(message.ledgerHashPrevious) : message.ledgerHashPrevious;
                if (message.networkTime != null && message.hasOwnProperty("networkTime"))
                    if (typeof message.networkTime === "number")
                        object.networkTime = options.longs === String ? String(message.networkTime) : message.networkTime;
                    else
                        object.networkTime = options.longs === String ? $util.Long.prototype.toString.call(message.networkTime) : options.longs === Number ? new $util.LongBits(message.networkTime.low >>> 0, message.networkTime.high >>> 0).toNumber(true) : message.networkTime;
                if (message.firstSeq != null && message.hasOwnProperty("firstSeq"))
                    object.firstSeq = message.firstSeq;
                if (message.lastSeq != null && message.hasOwnProperty("lastSeq"))
                    object.lastSeq = message.lastSeq;
                return object;
            };
    
            /**
             * Converts this TMStatusChange to JSON.
             * @function toJSON
             * @memberof protocol.TMStatusChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMStatusChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMStatusChange;
        })();
    
        protocol.TMProposeSet = (function() {
    
            /**
             * Properties of a TMProposeSet.
             * @memberof protocol
             * @interface ITMProposeSet
             * @property {number} proposeSeq TMProposeSet proposeSeq
             * @property {Uint8Array} currentTxHash TMProposeSet currentTxHash
             * @property {Uint8Array} nodePubKey TMProposeSet nodePubKey
             * @property {number} closeTime TMProposeSet closeTime
             * @property {Uint8Array} signature TMProposeSet signature
             * @property {Uint8Array} previousledger TMProposeSet previousledger
             * @property {boolean|null} [checkedSignature] TMProposeSet checkedSignature
             * @property {Array.<Uint8Array>|null} [addedTransactions] TMProposeSet addedTransactions
             * @property {Array.<Uint8Array>|null} [removedTransactions] TMProposeSet removedTransactions
             * @property {number|null} [hops] TMProposeSet hops
             */
    
            /**
             * Constructs a new TMProposeSet.
             * @memberof protocol
             * @classdesc Represents a TMProposeSet.
             * @implements ITMProposeSet
             * @constructor
             * @param {protocol.ITMProposeSet=} [properties] Properties to set
             */
            function TMProposeSet(properties) {
                this.addedTransactions = [];
                this.removedTransactions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMProposeSet proposeSeq.
             * @member {number} proposeSeq
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.proposeSeq = 0;
    
            /**
             * TMProposeSet currentTxHash.
             * @member {Uint8Array} currentTxHash
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.currentTxHash = $util.newBuffer([]);
    
            /**
             * TMProposeSet nodePubKey.
             * @member {Uint8Array} nodePubKey
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.nodePubKey = $util.newBuffer([]);
    
            /**
             * TMProposeSet closeTime.
             * @member {number} closeTime
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.closeTime = 0;
    
            /**
             * TMProposeSet signature.
             * @member {Uint8Array} signature
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.signature = $util.newBuffer([]);
    
            /**
             * TMProposeSet previousledger.
             * @member {Uint8Array} previousledger
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.previousledger = $util.newBuffer([]);
    
            /**
             * TMProposeSet checkedSignature.
             * @member {boolean} checkedSignature
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.checkedSignature = false;
    
            /**
             * TMProposeSet addedTransactions.
             * @member {Array.<Uint8Array>} addedTransactions
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.addedTransactions = $util.emptyArray;
    
            /**
             * TMProposeSet removedTransactions.
             * @member {Array.<Uint8Array>} removedTransactions
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.removedTransactions = $util.emptyArray;
    
            /**
             * TMProposeSet hops.
             * @member {number} hops
             * @memberof protocol.TMProposeSet
             * @instance
             */
            TMProposeSet.prototype.hops = 0;
    
            /**
             * Creates a new TMProposeSet instance using the specified properties.
             * @function create
             * @memberof protocol.TMProposeSet
             * @static
             * @param {protocol.ITMProposeSet=} [properties] Properties to set
             * @returns {protocol.TMProposeSet} TMProposeSet instance
             */
            TMProposeSet.create = function create(properties) {
                return new TMProposeSet(properties);
            };
    
            /**
             * Encodes the specified TMProposeSet message. Does not implicitly {@link protocol.TMProposeSet.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMProposeSet
             * @static
             * @param {protocol.ITMProposeSet} message TMProposeSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMProposeSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.proposeSeq);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.currentTxHash);
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.nodePubKey);
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.closeTime);
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.signature);
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.previousledger);
                if (message.checkedSignature != null && message.hasOwnProperty("checkedSignature"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.checkedSignature);
                if (message.addedTransactions != null && message.addedTransactions.length)
                    for (var i = 0; i < message.addedTransactions.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.addedTransactions[i]);
                if (message.removedTransactions != null && message.removedTransactions.length)
                    for (var i = 0; i < message.removedTransactions.length; ++i)
                        writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.removedTransactions[i]);
                if (message.hops != null && message.hasOwnProperty("hops"))
                    writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.hops);
                return writer;
            };
    
            /**
             * Encodes the specified TMProposeSet message, length delimited. Does not implicitly {@link protocol.TMProposeSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMProposeSet
             * @static
             * @param {protocol.ITMProposeSet} message TMProposeSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMProposeSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMProposeSet message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMProposeSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMProposeSet} TMProposeSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMProposeSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMProposeSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.proposeSeq = reader.uint32();
                        break;
                    case 2:
                        message.currentTxHash = reader.bytes();
                        break;
                    case 3:
                        message.nodePubKey = reader.bytes();
                        break;
                    case 4:
                        message.closeTime = reader.uint32();
                        break;
                    case 5:
                        message.signature = reader.bytes();
                        break;
                    case 6:
                        message.previousledger = reader.bytes();
                        break;
                    case 7:
                        message.checkedSignature = reader.bool();
                        break;
                    case 10:
                        if (!(message.addedTransactions && message.addedTransactions.length))
                            message.addedTransactions = [];
                        message.addedTransactions.push(reader.bytes());
                        break;
                    case 11:
                        if (!(message.removedTransactions && message.removedTransactions.length))
                            message.removedTransactions = [];
                        message.removedTransactions.push(reader.bytes());
                        break;
                    case 12:
                        message.hops = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("proposeSeq"))
                    throw $util.ProtocolError("missing required 'proposeSeq'", { instance: message });
                if (!message.hasOwnProperty("currentTxHash"))
                    throw $util.ProtocolError("missing required 'currentTxHash'", { instance: message });
                if (!message.hasOwnProperty("nodePubKey"))
                    throw $util.ProtocolError("missing required 'nodePubKey'", { instance: message });
                if (!message.hasOwnProperty("closeTime"))
                    throw $util.ProtocolError("missing required 'closeTime'", { instance: message });
                if (!message.hasOwnProperty("signature"))
                    throw $util.ProtocolError("missing required 'signature'", { instance: message });
                if (!message.hasOwnProperty("previousledger"))
                    throw $util.ProtocolError("missing required 'previousledger'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMProposeSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMProposeSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMProposeSet} TMProposeSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMProposeSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMProposeSet message.
             * @function verify
             * @memberof protocol.TMProposeSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMProposeSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.proposeSeq))
                    return "proposeSeq: integer expected";
                if (!(message.currentTxHash && typeof message.currentTxHash.length === "number" || $util.isString(message.currentTxHash)))
                    return "currentTxHash: buffer expected";
                if (!(message.nodePubKey && typeof message.nodePubKey.length === "number" || $util.isString(message.nodePubKey)))
                    return "nodePubKey: buffer expected";
                if (!$util.isInteger(message.closeTime))
                    return "closeTime: integer expected";
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
                if (!(message.previousledger && typeof message.previousledger.length === "number" || $util.isString(message.previousledger)))
                    return "previousledger: buffer expected";
                if (message.checkedSignature != null && message.hasOwnProperty("checkedSignature"))
                    if (typeof message.checkedSignature !== "boolean")
                        return "checkedSignature: boolean expected";
                if (message.addedTransactions != null && message.hasOwnProperty("addedTransactions")) {
                    if (!Array.isArray(message.addedTransactions))
                        return "addedTransactions: array expected";
                    for (var i = 0; i < message.addedTransactions.length; ++i)
                        if (!(message.addedTransactions[i] && typeof message.addedTransactions[i].length === "number" || $util.isString(message.addedTransactions[i])))
                            return "addedTransactions: buffer[] expected";
                }
                if (message.removedTransactions != null && message.hasOwnProperty("removedTransactions")) {
                    if (!Array.isArray(message.removedTransactions))
                        return "removedTransactions: array expected";
                    for (var i = 0; i < message.removedTransactions.length; ++i)
                        if (!(message.removedTransactions[i] && typeof message.removedTransactions[i].length === "number" || $util.isString(message.removedTransactions[i])))
                            return "removedTransactions: buffer[] expected";
                }
                if (message.hops != null && message.hasOwnProperty("hops"))
                    if (!$util.isInteger(message.hops))
                        return "hops: integer expected";
                return null;
            };
    
            /**
             * Creates a TMProposeSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMProposeSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMProposeSet} TMProposeSet
             */
            TMProposeSet.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMProposeSet)
                    return object;
                var message = new $root.protocol.TMProposeSet();
                if (object.proposeSeq != null)
                    message.proposeSeq = object.proposeSeq >>> 0;
                if (object.currentTxHash != null)
                    if (typeof object.currentTxHash === "string")
                        $util.base64.decode(object.currentTxHash, message.currentTxHash = $util.newBuffer($util.base64.length(object.currentTxHash)), 0);
                    else if (object.currentTxHash.length)
                        message.currentTxHash = object.currentTxHash;
                if (object.nodePubKey != null)
                    if (typeof object.nodePubKey === "string")
                        $util.base64.decode(object.nodePubKey, message.nodePubKey = $util.newBuffer($util.base64.length(object.nodePubKey)), 0);
                    else if (object.nodePubKey.length)
                        message.nodePubKey = object.nodePubKey;
                if (object.closeTime != null)
                    message.closeTime = object.closeTime >>> 0;
                if (object.signature != null)
                    if (typeof object.signature === "string")
                        $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                    else if (object.signature.length)
                        message.signature = object.signature;
                if (object.previousledger != null)
                    if (typeof object.previousledger === "string")
                        $util.base64.decode(object.previousledger, message.previousledger = $util.newBuffer($util.base64.length(object.previousledger)), 0);
                    else if (object.previousledger.length)
                        message.previousledger = object.previousledger;
                if (object.checkedSignature != null)
                    message.checkedSignature = Boolean(object.checkedSignature);
                if (object.addedTransactions) {
                    if (!Array.isArray(object.addedTransactions))
                        throw TypeError(".protocol.TMProposeSet.addedTransactions: array expected");
                    message.addedTransactions = [];
                    for (var i = 0; i < object.addedTransactions.length; ++i)
                        if (typeof object.addedTransactions[i] === "string")
                            $util.base64.decode(object.addedTransactions[i], message.addedTransactions[i] = $util.newBuffer($util.base64.length(object.addedTransactions[i])), 0);
                        else if (object.addedTransactions[i].length)
                            message.addedTransactions[i] = object.addedTransactions[i];
                }
                if (object.removedTransactions) {
                    if (!Array.isArray(object.removedTransactions))
                        throw TypeError(".protocol.TMProposeSet.removedTransactions: array expected");
                    message.removedTransactions = [];
                    for (var i = 0; i < object.removedTransactions.length; ++i)
                        if (typeof object.removedTransactions[i] === "string")
                            $util.base64.decode(object.removedTransactions[i], message.removedTransactions[i] = $util.newBuffer($util.base64.length(object.removedTransactions[i])), 0);
                        else if (object.removedTransactions[i].length)
                            message.removedTransactions[i] = object.removedTransactions[i];
                }
                if (object.hops != null)
                    message.hops = object.hops >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMProposeSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMProposeSet
             * @static
             * @param {protocol.TMProposeSet} message TMProposeSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMProposeSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.addedTransactions = [];
                    object.removedTransactions = [];
                }
                if (options.defaults) {
                    object.proposeSeq = 0;
                    if (options.bytes === String)
                        object.currentTxHash = "";
                    else {
                        object.currentTxHash = [];
                        if (options.bytes !== Array)
                            object.currentTxHash = $util.newBuffer(object.currentTxHash);
                    }
                    if (options.bytes === String)
                        object.nodePubKey = "";
                    else {
                        object.nodePubKey = [];
                        if (options.bytes !== Array)
                            object.nodePubKey = $util.newBuffer(object.nodePubKey);
                    }
                    object.closeTime = 0;
                    if (options.bytes === String)
                        object.signature = "";
                    else {
                        object.signature = [];
                        if (options.bytes !== Array)
                            object.signature = $util.newBuffer(object.signature);
                    }
                    if (options.bytes === String)
                        object.previousledger = "";
                    else {
                        object.previousledger = [];
                        if (options.bytes !== Array)
                            object.previousledger = $util.newBuffer(object.previousledger);
                    }
                    object.checkedSignature = false;
                    object.hops = 0;
                }
                if (message.proposeSeq != null && message.hasOwnProperty("proposeSeq"))
                    object.proposeSeq = message.proposeSeq;
                if (message.currentTxHash != null && message.hasOwnProperty("currentTxHash"))
                    object.currentTxHash = options.bytes === String ? $util.base64.encode(message.currentTxHash, 0, message.currentTxHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.currentTxHash) : message.currentTxHash;
                if (message.nodePubKey != null && message.hasOwnProperty("nodePubKey"))
                    object.nodePubKey = options.bytes === String ? $util.base64.encode(message.nodePubKey, 0, message.nodePubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodePubKey) : message.nodePubKey;
                if (message.closeTime != null && message.hasOwnProperty("closeTime"))
                    object.closeTime = message.closeTime;
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                if (message.previousledger != null && message.hasOwnProperty("previousledger"))
                    object.previousledger = options.bytes === String ? $util.base64.encode(message.previousledger, 0, message.previousledger.length) : options.bytes === Array ? Array.prototype.slice.call(message.previousledger) : message.previousledger;
                if (message.checkedSignature != null && message.hasOwnProperty("checkedSignature"))
                    object.checkedSignature = message.checkedSignature;
                if (message.addedTransactions && message.addedTransactions.length) {
                    object.addedTransactions = [];
                    for (var j = 0; j < message.addedTransactions.length; ++j)
                        object.addedTransactions[j] = options.bytes === String ? $util.base64.encode(message.addedTransactions[j], 0, message.addedTransactions[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.addedTransactions[j]) : message.addedTransactions[j];
                }
                if (message.removedTransactions && message.removedTransactions.length) {
                    object.removedTransactions = [];
                    for (var j = 0; j < message.removedTransactions.length; ++j)
                        object.removedTransactions[j] = options.bytes === String ? $util.base64.encode(message.removedTransactions[j], 0, message.removedTransactions[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.removedTransactions[j]) : message.removedTransactions[j];
                }
                if (message.hops != null && message.hasOwnProperty("hops"))
                    object.hops = message.hops;
                return object;
            };
    
            /**
             * Converts this TMProposeSet to JSON.
             * @function toJSON
             * @memberof protocol.TMProposeSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMProposeSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMProposeSet;
        })();
    
        /**
         * TxSetStatus enum.
         * @name protocol.TxSetStatus
         * @enum {string}
         * @property {number} tsHAVE=1 tsHAVE value
         * @property {number} tsCAN_GET=2 tsCAN_GET value
         * @property {number} tsNEED=3 tsNEED value
         */
        protocol.TxSetStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "tsHAVE"] = 1;
            values[valuesById[2] = "tsCAN_GET"] = 2;
            values[valuesById[3] = "tsNEED"] = 3;
            return values;
        })();
    
        protocol.TMHaveTransactionSet = (function() {
    
            /**
             * Properties of a TMHaveTransactionSet.
             * @memberof protocol
             * @interface ITMHaveTransactionSet
             * @property {protocol.TxSetStatus} status TMHaveTransactionSet status
             * @property {Uint8Array} hash TMHaveTransactionSet hash
             */
    
            /**
             * Constructs a new TMHaveTransactionSet.
             * @memberof protocol
             * @classdesc Represents a TMHaveTransactionSet.
             * @implements ITMHaveTransactionSet
             * @constructor
             * @param {protocol.ITMHaveTransactionSet=} [properties] Properties to set
             */
            function TMHaveTransactionSet(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMHaveTransactionSet status.
             * @member {protocol.TxSetStatus} status
             * @memberof protocol.TMHaveTransactionSet
             * @instance
             */
            TMHaveTransactionSet.prototype.status = 1;
    
            /**
             * TMHaveTransactionSet hash.
             * @member {Uint8Array} hash
             * @memberof protocol.TMHaveTransactionSet
             * @instance
             */
            TMHaveTransactionSet.prototype.hash = $util.newBuffer([]);
    
            /**
             * Creates a new TMHaveTransactionSet instance using the specified properties.
             * @function create
             * @memberof protocol.TMHaveTransactionSet
             * @static
             * @param {protocol.ITMHaveTransactionSet=} [properties] Properties to set
             * @returns {protocol.TMHaveTransactionSet} TMHaveTransactionSet instance
             */
            TMHaveTransactionSet.create = function create(properties) {
                return new TMHaveTransactionSet(properties);
            };
    
            /**
             * Encodes the specified TMHaveTransactionSet message. Does not implicitly {@link protocol.TMHaveTransactionSet.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMHaveTransactionSet
             * @static
             * @param {protocol.ITMHaveTransactionSet} message TMHaveTransactionSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMHaveTransactionSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.hash);
                return writer;
            };
    
            /**
             * Encodes the specified TMHaveTransactionSet message, length delimited. Does not implicitly {@link protocol.TMHaveTransactionSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMHaveTransactionSet
             * @static
             * @param {protocol.ITMHaveTransactionSet} message TMHaveTransactionSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMHaveTransactionSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMHaveTransactionSet message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMHaveTransactionSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMHaveTransactionSet} TMHaveTransactionSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMHaveTransactionSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMHaveTransactionSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.hash = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("status"))
                    throw $util.ProtocolError("missing required 'status'", { instance: message });
                if (!message.hasOwnProperty("hash"))
                    throw $util.ProtocolError("missing required 'hash'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMHaveTransactionSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMHaveTransactionSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMHaveTransactionSet} TMHaveTransactionSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMHaveTransactionSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMHaveTransactionSet message.
             * @function verify
             * @memberof protocol.TMHaveTransactionSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMHaveTransactionSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                    return "hash: buffer expected";
                return null;
            };
    
            /**
             * Creates a TMHaveTransactionSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMHaveTransactionSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMHaveTransactionSet} TMHaveTransactionSet
             */
            TMHaveTransactionSet.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMHaveTransactionSet)
                    return object;
                var message = new $root.protocol.TMHaveTransactionSet();
                switch (object.status) {
                case "tsHAVE":
                case 1:
                    message.status = 1;
                    break;
                case "tsCAN_GET":
                case 2:
                    message.status = 2;
                    break;
                case "tsNEED":
                case 3:
                    message.status = 3;
                    break;
                }
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                return message;
            };
    
            /**
             * Creates a plain object from a TMHaveTransactionSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMHaveTransactionSet
             * @static
             * @param {protocol.TMHaveTransactionSet} message TMHaveTransactionSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMHaveTransactionSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "tsHAVE" : 1;
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.protocol.TxSetStatus[message.status] : message.status;
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                return object;
            };
    
            /**
             * Converts this TMHaveTransactionSet to JSON.
             * @function toJSON
             * @memberof protocol.TMHaveTransactionSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMHaveTransactionSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMHaveTransactionSet;
        })();
    
        protocol.TMValidation = (function() {
    
            /**
             * Properties of a TMValidation.
             * @memberof protocol
             * @interface ITMValidation
             * @property {Uint8Array} validation TMValidation validation
             * @property {boolean|null} [checkedSignature] TMValidation checkedSignature
             * @property {number|null} [hops] TMValidation hops
             */
    
            /**
             * Constructs a new TMValidation.
             * @memberof protocol
             * @classdesc Represents a TMValidation.
             * @implements ITMValidation
             * @constructor
             * @param {protocol.ITMValidation=} [properties] Properties to set
             */
            function TMValidation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMValidation validation.
             * @member {Uint8Array} validation
             * @memberof protocol.TMValidation
             * @instance
             */
            TMValidation.prototype.validation = $util.newBuffer([]);
    
            /**
             * TMValidation checkedSignature.
             * @member {boolean} checkedSignature
             * @memberof protocol.TMValidation
             * @instance
             */
            TMValidation.prototype.checkedSignature = false;
    
            /**
             * TMValidation hops.
             * @member {number} hops
             * @memberof protocol.TMValidation
             * @instance
             */
            TMValidation.prototype.hops = 0;
    
            /**
             * Creates a new TMValidation instance using the specified properties.
             * @function create
             * @memberof protocol.TMValidation
             * @static
             * @param {protocol.ITMValidation=} [properties] Properties to set
             * @returns {protocol.TMValidation} TMValidation instance
             */
            TMValidation.create = function create(properties) {
                return new TMValidation(properties);
            };
    
            /**
             * Encodes the specified TMValidation message. Does not implicitly {@link protocol.TMValidation.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMValidation
             * @static
             * @param {protocol.ITMValidation} message TMValidation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMValidation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.validation);
                if (message.checkedSignature != null && message.hasOwnProperty("checkedSignature"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.checkedSignature);
                if (message.hops != null && message.hasOwnProperty("hops"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.hops);
                return writer;
            };
    
            /**
             * Encodes the specified TMValidation message, length delimited. Does not implicitly {@link protocol.TMValidation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMValidation
             * @static
             * @param {protocol.ITMValidation} message TMValidation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMValidation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMValidation message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMValidation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMValidation} TMValidation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMValidation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMValidation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.validation = reader.bytes();
                        break;
                    case 2:
                        message.checkedSignature = reader.bool();
                        break;
                    case 3:
                        message.hops = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("validation"))
                    throw $util.ProtocolError("missing required 'validation'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMValidation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMValidation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMValidation} TMValidation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMValidation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMValidation message.
             * @function verify
             * @memberof protocol.TMValidation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMValidation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!(message.validation && typeof message.validation.length === "number" || $util.isString(message.validation)))
                    return "validation: buffer expected";
                if (message.checkedSignature != null && message.hasOwnProperty("checkedSignature"))
                    if (typeof message.checkedSignature !== "boolean")
                        return "checkedSignature: boolean expected";
                if (message.hops != null && message.hasOwnProperty("hops"))
                    if (!$util.isInteger(message.hops))
                        return "hops: integer expected";
                return null;
            };
    
            /**
             * Creates a TMValidation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMValidation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMValidation} TMValidation
             */
            TMValidation.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMValidation)
                    return object;
                var message = new $root.protocol.TMValidation();
                if (object.validation != null)
                    if (typeof object.validation === "string")
                        $util.base64.decode(object.validation, message.validation = $util.newBuffer($util.base64.length(object.validation)), 0);
                    else if (object.validation.length)
                        message.validation = object.validation;
                if (object.checkedSignature != null)
                    message.checkedSignature = Boolean(object.checkedSignature);
                if (object.hops != null)
                    message.hops = object.hops >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMValidation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMValidation
             * @static
             * @param {protocol.TMValidation} message TMValidation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMValidation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.validation = "";
                    else {
                        object.validation = [];
                        if (options.bytes !== Array)
                            object.validation = $util.newBuffer(object.validation);
                    }
                    object.checkedSignature = false;
                    object.hops = 0;
                }
                if (message.validation != null && message.hasOwnProperty("validation"))
                    object.validation = options.bytes === String ? $util.base64.encode(message.validation, 0, message.validation.length) : options.bytes === Array ? Array.prototype.slice.call(message.validation) : message.validation;
                if (message.checkedSignature != null && message.hasOwnProperty("checkedSignature"))
                    object.checkedSignature = message.checkedSignature;
                if (message.hops != null && message.hasOwnProperty("hops"))
                    object.hops = message.hops;
                return object;
            };
    
            /**
             * Converts this TMValidation to JSON.
             * @function toJSON
             * @memberof protocol.TMValidation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMValidation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMValidation;
        })();
    
        protocol.TMGetPeers = (function() {
    
            /**
             * Properties of a TMGetPeers.
             * @memberof protocol
             * @interface ITMGetPeers
             * @property {number} doWeNeedThis TMGetPeers doWeNeedThis
             */
    
            /**
             * Constructs a new TMGetPeers.
             * @memberof protocol
             * @classdesc Represents a TMGetPeers.
             * @implements ITMGetPeers
             * @constructor
             * @param {protocol.ITMGetPeers=} [properties] Properties to set
             */
            function TMGetPeers(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMGetPeers doWeNeedThis.
             * @member {number} doWeNeedThis
             * @memberof protocol.TMGetPeers
             * @instance
             */
            TMGetPeers.prototype.doWeNeedThis = 0;
    
            /**
             * Creates a new TMGetPeers instance using the specified properties.
             * @function create
             * @memberof protocol.TMGetPeers
             * @static
             * @param {protocol.ITMGetPeers=} [properties] Properties to set
             * @returns {protocol.TMGetPeers} TMGetPeers instance
             */
            TMGetPeers.create = function create(properties) {
                return new TMGetPeers(properties);
            };
    
            /**
             * Encodes the specified TMGetPeers message. Does not implicitly {@link protocol.TMGetPeers.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMGetPeers
             * @static
             * @param {protocol.ITMGetPeers} message TMGetPeers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMGetPeers.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.doWeNeedThis);
                return writer;
            };
    
            /**
             * Encodes the specified TMGetPeers message, length delimited. Does not implicitly {@link protocol.TMGetPeers.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMGetPeers
             * @static
             * @param {protocol.ITMGetPeers} message TMGetPeers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMGetPeers.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMGetPeers message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMGetPeers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMGetPeers} TMGetPeers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMGetPeers.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMGetPeers();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.doWeNeedThis = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("doWeNeedThis"))
                    throw $util.ProtocolError("missing required 'doWeNeedThis'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMGetPeers message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMGetPeers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMGetPeers} TMGetPeers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMGetPeers.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMGetPeers message.
             * @function verify
             * @memberof protocol.TMGetPeers
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMGetPeers.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.doWeNeedThis))
                    return "doWeNeedThis: integer expected";
                return null;
            };
    
            /**
             * Creates a TMGetPeers message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMGetPeers
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMGetPeers} TMGetPeers
             */
            TMGetPeers.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMGetPeers)
                    return object;
                var message = new $root.protocol.TMGetPeers();
                if (object.doWeNeedThis != null)
                    message.doWeNeedThis = object.doWeNeedThis >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMGetPeers message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMGetPeers
             * @static
             * @param {protocol.TMGetPeers} message TMGetPeers
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMGetPeers.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.doWeNeedThis = 0;
                if (message.doWeNeedThis != null && message.hasOwnProperty("doWeNeedThis"))
                    object.doWeNeedThis = message.doWeNeedThis;
                return object;
            };
    
            /**
             * Converts this TMGetPeers to JSON.
             * @function toJSON
             * @memberof protocol.TMGetPeers
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMGetPeers.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMGetPeers;
        })();
    
        protocol.TMIPv4Endpoint = (function() {
    
            /**
             * Properties of a TMIPv4Endpoint.
             * @memberof protocol
             * @interface ITMIPv4Endpoint
             * @property {number} ipv4 TMIPv4Endpoint ipv4
             * @property {number} ipv4Port TMIPv4Endpoint ipv4Port
             */
    
            /**
             * Constructs a new TMIPv4Endpoint.
             * @memberof protocol
             * @classdesc Represents a TMIPv4Endpoint.
             * @implements ITMIPv4Endpoint
             * @constructor
             * @param {protocol.ITMIPv4Endpoint=} [properties] Properties to set
             */
            function TMIPv4Endpoint(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMIPv4Endpoint ipv4.
             * @member {number} ipv4
             * @memberof protocol.TMIPv4Endpoint
             * @instance
             */
            TMIPv4Endpoint.prototype.ipv4 = 0;
    
            /**
             * TMIPv4Endpoint ipv4Port.
             * @member {number} ipv4Port
             * @memberof protocol.TMIPv4Endpoint
             * @instance
             */
            TMIPv4Endpoint.prototype.ipv4Port = 0;
    
            /**
             * Creates a new TMIPv4Endpoint instance using the specified properties.
             * @function create
             * @memberof protocol.TMIPv4Endpoint
             * @static
             * @param {protocol.ITMIPv4Endpoint=} [properties] Properties to set
             * @returns {protocol.TMIPv4Endpoint} TMIPv4Endpoint instance
             */
            TMIPv4Endpoint.create = function create(properties) {
                return new TMIPv4Endpoint(properties);
            };
    
            /**
             * Encodes the specified TMIPv4Endpoint message. Does not implicitly {@link protocol.TMIPv4Endpoint.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMIPv4Endpoint
             * @static
             * @param {protocol.ITMIPv4Endpoint} message TMIPv4Endpoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMIPv4Endpoint.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ipv4);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ipv4Port);
                return writer;
            };
    
            /**
             * Encodes the specified TMIPv4Endpoint message, length delimited. Does not implicitly {@link protocol.TMIPv4Endpoint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMIPv4Endpoint
             * @static
             * @param {protocol.ITMIPv4Endpoint} message TMIPv4Endpoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMIPv4Endpoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMIPv4Endpoint message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMIPv4Endpoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMIPv4Endpoint} TMIPv4Endpoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMIPv4Endpoint.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMIPv4Endpoint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ipv4 = reader.uint32();
                        break;
                    case 2:
                        message.ipv4Port = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ipv4"))
                    throw $util.ProtocolError("missing required 'ipv4'", { instance: message });
                if (!message.hasOwnProperty("ipv4Port"))
                    throw $util.ProtocolError("missing required 'ipv4Port'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMIPv4Endpoint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMIPv4Endpoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMIPv4Endpoint} TMIPv4Endpoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMIPv4Endpoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMIPv4Endpoint message.
             * @function verify
             * @memberof protocol.TMIPv4Endpoint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMIPv4Endpoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.ipv4))
                    return "ipv4: integer expected";
                if (!$util.isInteger(message.ipv4Port))
                    return "ipv4Port: integer expected";
                return null;
            };
    
            /**
             * Creates a TMIPv4Endpoint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMIPv4Endpoint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMIPv4Endpoint} TMIPv4Endpoint
             */
            TMIPv4Endpoint.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMIPv4Endpoint)
                    return object;
                var message = new $root.protocol.TMIPv4Endpoint();
                if (object.ipv4 != null)
                    message.ipv4 = object.ipv4 >>> 0;
                if (object.ipv4Port != null)
                    message.ipv4Port = object.ipv4Port >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMIPv4Endpoint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMIPv4Endpoint
             * @static
             * @param {protocol.TMIPv4Endpoint} message TMIPv4Endpoint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMIPv4Endpoint.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ipv4 = 0;
                    object.ipv4Port = 0;
                }
                if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                    object.ipv4 = message.ipv4;
                if (message.ipv4Port != null && message.hasOwnProperty("ipv4Port"))
                    object.ipv4Port = message.ipv4Port;
                return object;
            };
    
            /**
             * Converts this TMIPv4Endpoint to JSON.
             * @function toJSON
             * @memberof protocol.TMIPv4Endpoint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMIPv4Endpoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMIPv4Endpoint;
        })();
    
        protocol.TMPeers = (function() {
    
            /**
             * Properties of a TMPeers.
             * @memberof protocol
             * @interface ITMPeers
             * @property {Array.<protocol.ITMIPv4Endpoint>|null} [nodes] TMPeers nodes
             */
    
            /**
             * Constructs a new TMPeers.
             * @memberof protocol
             * @classdesc Represents a TMPeers.
             * @implements ITMPeers
             * @constructor
             * @param {protocol.ITMPeers=} [properties] Properties to set
             */
            function TMPeers(properties) {
                this.nodes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMPeers nodes.
             * @member {Array.<protocol.ITMIPv4Endpoint>} nodes
             * @memberof protocol.TMPeers
             * @instance
             */
            TMPeers.prototype.nodes = $util.emptyArray;
    
            /**
             * Creates a new TMPeers instance using the specified properties.
             * @function create
             * @memberof protocol.TMPeers
             * @static
             * @param {protocol.ITMPeers=} [properties] Properties to set
             * @returns {protocol.TMPeers} TMPeers instance
             */
            TMPeers.create = function create(properties) {
                return new TMPeers(properties);
            };
    
            /**
             * Encodes the specified TMPeers message. Does not implicitly {@link protocol.TMPeers.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMPeers
             * @static
             * @param {protocol.ITMPeers} message TMPeers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMPeers.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nodes != null && message.nodes.length)
                    for (var i = 0; i < message.nodes.length; ++i)
                        $root.protocol.TMIPv4Endpoint.encode(message.nodes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TMPeers message, length delimited. Does not implicitly {@link protocol.TMPeers.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMPeers
             * @static
             * @param {protocol.ITMPeers} message TMPeers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMPeers.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMPeers message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMPeers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMPeers} TMPeers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMPeers.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMPeers();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.nodes && message.nodes.length))
                            message.nodes = [];
                        message.nodes.push($root.protocol.TMIPv4Endpoint.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TMPeers message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMPeers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMPeers} TMPeers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMPeers.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMPeers message.
             * @function verify
             * @memberof protocol.TMPeers
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMPeers.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nodes != null && message.hasOwnProperty("nodes")) {
                    if (!Array.isArray(message.nodes))
                        return "nodes: array expected";
                    for (var i = 0; i < message.nodes.length; ++i) {
                        var error = $root.protocol.TMIPv4Endpoint.verify(message.nodes[i]);
                        if (error)
                            return "nodes." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TMPeers message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMPeers
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMPeers} TMPeers
             */
            TMPeers.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMPeers)
                    return object;
                var message = new $root.protocol.TMPeers();
                if (object.nodes) {
                    if (!Array.isArray(object.nodes))
                        throw TypeError(".protocol.TMPeers.nodes: array expected");
                    message.nodes = [];
                    for (var i = 0; i < object.nodes.length; ++i) {
                        if (typeof object.nodes[i] !== "object")
                            throw TypeError(".protocol.TMPeers.nodes: object expected");
                        message.nodes[i] = $root.protocol.TMIPv4Endpoint.fromObject(object.nodes[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TMPeers message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMPeers
             * @static
             * @param {protocol.TMPeers} message TMPeers
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMPeers.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.nodes = [];
                if (message.nodes && message.nodes.length) {
                    object.nodes = [];
                    for (var j = 0; j < message.nodes.length; ++j)
                        object.nodes[j] = $root.protocol.TMIPv4Endpoint.toObject(message.nodes[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TMPeers to JSON.
             * @function toJSON
             * @memberof protocol.TMPeers
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMPeers.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMPeers;
        })();
    
        protocol.TMEndpoint = (function() {
    
            /**
             * Properties of a TMEndpoint.
             * @memberof protocol
             * @interface ITMEndpoint
             * @property {protocol.ITMIPv4Endpoint} ipv4 TMEndpoint ipv4
             * @property {number} hops TMEndpoint hops
             */
    
            /**
             * Constructs a new TMEndpoint.
             * @memberof protocol
             * @classdesc Represents a TMEndpoint.
             * @implements ITMEndpoint
             * @constructor
             * @param {protocol.ITMEndpoint=} [properties] Properties to set
             */
            function TMEndpoint(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMEndpoint ipv4.
             * @member {protocol.ITMIPv4Endpoint} ipv4
             * @memberof protocol.TMEndpoint
             * @instance
             */
            TMEndpoint.prototype.ipv4 = null;
    
            /**
             * TMEndpoint hops.
             * @member {number} hops
             * @memberof protocol.TMEndpoint
             * @instance
             */
            TMEndpoint.prototype.hops = 0;
    
            /**
             * Creates a new TMEndpoint instance using the specified properties.
             * @function create
             * @memberof protocol.TMEndpoint
             * @static
             * @param {protocol.ITMEndpoint=} [properties] Properties to set
             * @returns {protocol.TMEndpoint} TMEndpoint instance
             */
            TMEndpoint.create = function create(properties) {
                return new TMEndpoint(properties);
            };
    
            /**
             * Encodes the specified TMEndpoint message. Does not implicitly {@link protocol.TMEndpoint.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMEndpoint
             * @static
             * @param {protocol.ITMEndpoint} message TMEndpoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMEndpoint.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.protocol.TMIPv4Endpoint.encode(message.ipv4, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.hops);
                return writer;
            };
    
            /**
             * Encodes the specified TMEndpoint message, length delimited. Does not implicitly {@link protocol.TMEndpoint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMEndpoint
             * @static
             * @param {protocol.ITMEndpoint} message TMEndpoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMEndpoint message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMEndpoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMEndpoint} TMEndpoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMEndpoint.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMEndpoint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ipv4 = $root.protocol.TMIPv4Endpoint.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.hops = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ipv4"))
                    throw $util.ProtocolError("missing required 'ipv4'", { instance: message });
                if (!message.hasOwnProperty("hops"))
                    throw $util.ProtocolError("missing required 'hops'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMEndpoint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMEndpoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMEndpoint} TMEndpoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMEndpoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMEndpoint message.
             * @function verify
             * @memberof protocol.TMEndpoint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMEndpoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.protocol.TMIPv4Endpoint.verify(message.ipv4);
                    if (error)
                        return "ipv4." + error;
                }
                if (!$util.isInteger(message.hops))
                    return "hops: integer expected";
                return null;
            };
    
            /**
             * Creates a TMEndpoint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMEndpoint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMEndpoint} TMEndpoint
             */
            TMEndpoint.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMEndpoint)
                    return object;
                var message = new $root.protocol.TMEndpoint();
                if (object.ipv4 != null) {
                    if (typeof object.ipv4 !== "object")
                        throw TypeError(".protocol.TMEndpoint.ipv4: object expected");
                    message.ipv4 = $root.protocol.TMIPv4Endpoint.fromObject(object.ipv4);
                }
                if (object.hops != null)
                    message.hops = object.hops >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMEndpoint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMEndpoint
             * @static
             * @param {protocol.TMEndpoint} message TMEndpoint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMEndpoint.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ipv4 = null;
                    object.hops = 0;
                }
                if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                    object.ipv4 = $root.protocol.TMIPv4Endpoint.toObject(message.ipv4, options);
                if (message.hops != null && message.hasOwnProperty("hops"))
                    object.hops = message.hops;
                return object;
            };
    
            /**
             * Converts this TMEndpoint to JSON.
             * @function toJSON
             * @memberof protocol.TMEndpoint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMEndpoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMEndpoint;
        })();
    
        protocol.TMEndpoints = (function() {
    
            /**
             * Properties of a TMEndpoints.
             * @memberof protocol
             * @interface ITMEndpoints
             * @property {number} version TMEndpoints version
             * @property {Array.<protocol.ITMEndpoint>|null} [endpoints] TMEndpoints endpoints
             * @property {Array.<protocol.TMEndpoints.ITMEndpointv2>|null} [endpointsV2] TMEndpoints endpointsV2
             */
    
            /**
             * Constructs a new TMEndpoints.
             * @memberof protocol
             * @classdesc Represents a TMEndpoints.
             * @implements ITMEndpoints
             * @constructor
             * @param {protocol.ITMEndpoints=} [properties] Properties to set
             */
            function TMEndpoints(properties) {
                this.endpoints = [];
                this.endpointsV2 = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMEndpoints version.
             * @member {number} version
             * @memberof protocol.TMEndpoints
             * @instance
             */
            TMEndpoints.prototype.version = 0;
    
            /**
             * TMEndpoints endpoints.
             * @member {Array.<protocol.ITMEndpoint>} endpoints
             * @memberof protocol.TMEndpoints
             * @instance
             */
            TMEndpoints.prototype.endpoints = $util.emptyArray;
    
            /**
             * TMEndpoints endpointsV2.
             * @member {Array.<protocol.TMEndpoints.ITMEndpointv2>} endpointsV2
             * @memberof protocol.TMEndpoints
             * @instance
             */
            TMEndpoints.prototype.endpointsV2 = $util.emptyArray;
    
            /**
             * Creates a new TMEndpoints instance using the specified properties.
             * @function create
             * @memberof protocol.TMEndpoints
             * @static
             * @param {protocol.ITMEndpoints=} [properties] Properties to set
             * @returns {protocol.TMEndpoints} TMEndpoints instance
             */
            TMEndpoints.create = function create(properties) {
                return new TMEndpoints(properties);
            };
    
            /**
             * Encodes the specified TMEndpoints message. Does not implicitly {@link protocol.TMEndpoints.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMEndpoints
             * @static
             * @param {protocol.ITMEndpoints} message TMEndpoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMEndpoints.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
                if (message.endpoints != null && message.endpoints.length)
                    for (var i = 0; i < message.endpoints.length; ++i)
                        $root.protocol.TMEndpoint.encode(message.endpoints[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.endpointsV2 != null && message.endpointsV2.length)
                    for (var i = 0; i < message.endpointsV2.length; ++i)
                        $root.protocol.TMEndpoints.TMEndpointv2.encode(message.endpointsV2[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TMEndpoints message, length delimited. Does not implicitly {@link protocol.TMEndpoints.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMEndpoints
             * @static
             * @param {protocol.ITMEndpoints} message TMEndpoints message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMEndpoints.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMEndpoints message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMEndpoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMEndpoints} TMEndpoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMEndpoints.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMEndpoints();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.version = reader.uint32();
                        break;
                    case 2:
                        if (!(message.endpoints && message.endpoints.length))
                            message.endpoints = [];
                        message.endpoints.push($root.protocol.TMEndpoint.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.endpointsV2 && message.endpointsV2.length))
                            message.endpointsV2 = [];
                        message.endpointsV2.push($root.protocol.TMEndpoints.TMEndpointv2.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("version"))
                    throw $util.ProtocolError("missing required 'version'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMEndpoints message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMEndpoints
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMEndpoints} TMEndpoints
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMEndpoints.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMEndpoints message.
             * @function verify
             * @memberof protocol.TMEndpoints
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMEndpoints.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
                if (message.endpoints != null && message.hasOwnProperty("endpoints")) {
                    if (!Array.isArray(message.endpoints))
                        return "endpoints: array expected";
                    for (var i = 0; i < message.endpoints.length; ++i) {
                        var error = $root.protocol.TMEndpoint.verify(message.endpoints[i]);
                        if (error)
                            return "endpoints." + error;
                    }
                }
                if (message.endpointsV2 != null && message.hasOwnProperty("endpointsV2")) {
                    if (!Array.isArray(message.endpointsV2))
                        return "endpointsV2: array expected";
                    for (var i = 0; i < message.endpointsV2.length; ++i) {
                        var error = $root.protocol.TMEndpoints.TMEndpointv2.verify(message.endpointsV2[i]);
                        if (error)
                            return "endpointsV2." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TMEndpoints message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMEndpoints
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMEndpoints} TMEndpoints
             */
            TMEndpoints.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMEndpoints)
                    return object;
                var message = new $root.protocol.TMEndpoints();
                if (object.version != null)
                    message.version = object.version >>> 0;
                if (object.endpoints) {
                    if (!Array.isArray(object.endpoints))
                        throw TypeError(".protocol.TMEndpoints.endpoints: array expected");
                    message.endpoints = [];
                    for (var i = 0; i < object.endpoints.length; ++i) {
                        if (typeof object.endpoints[i] !== "object")
                            throw TypeError(".protocol.TMEndpoints.endpoints: object expected");
                        message.endpoints[i] = $root.protocol.TMEndpoint.fromObject(object.endpoints[i]);
                    }
                }
                if (object.endpointsV2) {
                    if (!Array.isArray(object.endpointsV2))
                        throw TypeError(".protocol.TMEndpoints.endpointsV2: array expected");
                    message.endpointsV2 = [];
                    for (var i = 0; i < object.endpointsV2.length; ++i) {
                        if (typeof object.endpointsV2[i] !== "object")
                            throw TypeError(".protocol.TMEndpoints.endpointsV2: object expected");
                        message.endpointsV2[i] = $root.protocol.TMEndpoints.TMEndpointv2.fromObject(object.endpointsV2[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TMEndpoints message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMEndpoints
             * @static
             * @param {protocol.TMEndpoints} message TMEndpoints
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMEndpoints.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.endpoints = [];
                    object.endpointsV2 = [];
                }
                if (options.defaults)
                    object.version = 0;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.endpoints && message.endpoints.length) {
                    object.endpoints = [];
                    for (var j = 0; j < message.endpoints.length; ++j)
                        object.endpoints[j] = $root.protocol.TMEndpoint.toObject(message.endpoints[j], options);
                }
                if (message.endpointsV2 && message.endpointsV2.length) {
                    object.endpointsV2 = [];
                    for (var j = 0; j < message.endpointsV2.length; ++j)
                        object.endpointsV2[j] = $root.protocol.TMEndpoints.TMEndpointv2.toObject(message.endpointsV2[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TMEndpoints to JSON.
             * @function toJSON
             * @memberof protocol.TMEndpoints
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMEndpoints.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            TMEndpoints.TMEndpointv2 = (function() {
    
                /**
                 * Properties of a TMEndpointv2.
                 * @memberof protocol.TMEndpoints
                 * @interface ITMEndpointv2
                 * @property {string} endpoint TMEndpointv2 endpoint
                 * @property {number} hops TMEndpointv2 hops
                 */
    
                /**
                 * Constructs a new TMEndpointv2.
                 * @memberof protocol.TMEndpoints
                 * @classdesc Represents a TMEndpointv2.
                 * @implements ITMEndpointv2
                 * @constructor
                 * @param {protocol.TMEndpoints.ITMEndpointv2=} [properties] Properties to set
                 */
                function TMEndpointv2(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * TMEndpointv2 endpoint.
                 * @member {string} endpoint
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @instance
                 */
                TMEndpointv2.prototype.endpoint = "";
    
                /**
                 * TMEndpointv2 hops.
                 * @member {number} hops
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @instance
                 */
                TMEndpointv2.prototype.hops = 0;
    
                /**
                 * Creates a new TMEndpointv2 instance using the specified properties.
                 * @function create
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @static
                 * @param {protocol.TMEndpoints.ITMEndpointv2=} [properties] Properties to set
                 * @returns {protocol.TMEndpoints.TMEndpointv2} TMEndpointv2 instance
                 */
                TMEndpointv2.create = function create(properties) {
                    return new TMEndpointv2(properties);
                };
    
                /**
                 * Encodes the specified TMEndpointv2 message. Does not implicitly {@link protocol.TMEndpoints.TMEndpointv2.verify|verify} messages.
                 * @function encode
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @static
                 * @param {protocol.TMEndpoints.ITMEndpointv2} message TMEndpointv2 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TMEndpointv2.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.hops);
                    return writer;
                };
    
                /**
                 * Encodes the specified TMEndpointv2 message, length delimited. Does not implicitly {@link protocol.TMEndpoints.TMEndpointv2.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @static
                 * @param {protocol.TMEndpoints.ITMEndpointv2} message TMEndpointv2 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TMEndpointv2.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a TMEndpointv2 message from the specified reader or buffer.
                 * @function decode
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protocol.TMEndpoints.TMEndpointv2} TMEndpointv2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TMEndpointv2.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMEndpoints.TMEndpointv2();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.endpoint = reader.string();
                            break;
                        case 2:
                            message.hops = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("endpoint"))
                        throw $util.ProtocolError("missing required 'endpoint'", { instance: message });
                    if (!message.hasOwnProperty("hops"))
                        throw $util.ProtocolError("missing required 'hops'", { instance: message });
                    return message;
                };
    
                /**
                 * Decodes a TMEndpointv2 message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protocol.TMEndpoints.TMEndpointv2} TMEndpointv2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TMEndpointv2.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a TMEndpointv2 message.
                 * @function verify
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TMEndpointv2.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.endpoint))
                        return "endpoint: string expected";
                    if (!$util.isInteger(message.hops))
                        return "hops: integer expected";
                    return null;
                };
    
                /**
                 * Creates a TMEndpointv2 message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protocol.TMEndpoints.TMEndpointv2} TMEndpointv2
                 */
                TMEndpointv2.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.TMEndpoints.TMEndpointv2)
                        return object;
                    var message = new $root.protocol.TMEndpoints.TMEndpointv2();
                    if (object.endpoint != null)
                        message.endpoint = String(object.endpoint);
                    if (object.hops != null)
                        message.hops = object.hops >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a TMEndpointv2 message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @static
                 * @param {protocol.TMEndpoints.TMEndpointv2} message TMEndpointv2
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TMEndpointv2.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.endpoint = "";
                        object.hops = 0;
                    }
                    if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                        object.endpoint = message.endpoint;
                    if (message.hops != null && message.hasOwnProperty("hops"))
                        object.hops = message.hops;
                    return object;
                };
    
                /**
                 * Converts this TMEndpointv2 to JSON.
                 * @function toJSON
                 * @memberof protocol.TMEndpoints.TMEndpointv2
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TMEndpointv2.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return TMEndpointv2;
            })();
    
            return TMEndpoints;
        })();
    
        protocol.TMIndexedObject = (function() {
    
            /**
             * Properties of a TMIndexedObject.
             * @memberof protocol
             * @interface ITMIndexedObject
             * @property {Uint8Array|null} [hash] TMIndexedObject hash
             * @property {Uint8Array|null} [nodeID] TMIndexedObject nodeID
             * @property {Uint8Array|null} [index] TMIndexedObject index
             * @property {Uint8Array|null} [data] TMIndexedObject data
             * @property {number|null} [ledgerSeq] TMIndexedObject ledgerSeq
             */
    
            /**
             * Constructs a new TMIndexedObject.
             * @memberof protocol
             * @classdesc Represents a TMIndexedObject.
             * @implements ITMIndexedObject
             * @constructor
             * @param {protocol.ITMIndexedObject=} [properties] Properties to set
             */
            function TMIndexedObject(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMIndexedObject hash.
             * @member {Uint8Array} hash
             * @memberof protocol.TMIndexedObject
             * @instance
             */
            TMIndexedObject.prototype.hash = $util.newBuffer([]);
    
            /**
             * TMIndexedObject nodeID.
             * @member {Uint8Array} nodeID
             * @memberof protocol.TMIndexedObject
             * @instance
             */
            TMIndexedObject.prototype.nodeID = $util.newBuffer([]);
    
            /**
             * TMIndexedObject index.
             * @member {Uint8Array} index
             * @memberof protocol.TMIndexedObject
             * @instance
             */
            TMIndexedObject.prototype.index = $util.newBuffer([]);
    
            /**
             * TMIndexedObject data.
             * @member {Uint8Array} data
             * @memberof protocol.TMIndexedObject
             * @instance
             */
            TMIndexedObject.prototype.data = $util.newBuffer([]);
    
            /**
             * TMIndexedObject ledgerSeq.
             * @member {number} ledgerSeq
             * @memberof protocol.TMIndexedObject
             * @instance
             */
            TMIndexedObject.prototype.ledgerSeq = 0;
    
            /**
             * Creates a new TMIndexedObject instance using the specified properties.
             * @function create
             * @memberof protocol.TMIndexedObject
             * @static
             * @param {protocol.ITMIndexedObject=} [properties] Properties to set
             * @returns {protocol.TMIndexedObject} TMIndexedObject instance
             */
            TMIndexedObject.create = function create(properties) {
                return new TMIndexedObject(properties);
            };
    
            /**
             * Encodes the specified TMIndexedObject message. Does not implicitly {@link protocol.TMIndexedObject.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMIndexedObject
             * @static
             * @param {protocol.ITMIndexedObject} message TMIndexedObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMIndexedObject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hash != null && message.hasOwnProperty("hash"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
                if (message.nodeID != null && message.hasOwnProperty("nodeID"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.nodeID);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.index);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ledgerSeq);
                return writer;
            };
    
            /**
             * Encodes the specified TMIndexedObject message, length delimited. Does not implicitly {@link protocol.TMIndexedObject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMIndexedObject
             * @static
             * @param {protocol.ITMIndexedObject} message TMIndexedObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMIndexedObject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMIndexedObject message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMIndexedObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMIndexedObject} TMIndexedObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMIndexedObject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMIndexedObject();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.hash = reader.bytes();
                        break;
                    case 2:
                        message.nodeID = reader.bytes();
                        break;
                    case 3:
                        message.index = reader.bytes();
                        break;
                    case 4:
                        message.data = reader.bytes();
                        break;
                    case 5:
                        message.ledgerSeq = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TMIndexedObject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMIndexedObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMIndexedObject} TMIndexedObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMIndexedObject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMIndexedObject message.
             * @function verify
             * @memberof protocol.TMIndexedObject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMIndexedObject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hash != null && message.hasOwnProperty("hash"))
                    if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                        return "hash: buffer expected";
                if (message.nodeID != null && message.hasOwnProperty("nodeID"))
                    if (!(message.nodeID && typeof message.nodeID.length === "number" || $util.isString(message.nodeID)))
                        return "nodeID: buffer expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!(message.index && typeof message.index.length === "number" || $util.isString(message.index)))
                        return "index: buffer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    if (!$util.isInteger(message.ledgerSeq))
                        return "ledgerSeq: integer expected";
                return null;
            };
    
            /**
             * Creates a TMIndexedObject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMIndexedObject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMIndexedObject} TMIndexedObject
             */
            TMIndexedObject.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMIndexedObject)
                    return object;
                var message = new $root.protocol.TMIndexedObject();
                if (object.hash != null)
                    if (typeof object.hash === "string")
                        $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                    else if (object.hash.length)
                        message.hash = object.hash;
                if (object.nodeID != null)
                    if (typeof object.nodeID === "string")
                        $util.base64.decode(object.nodeID, message.nodeID = $util.newBuffer($util.base64.length(object.nodeID)), 0);
                    else if (object.nodeID.length)
                        message.nodeID = object.nodeID;
                if (object.index != null)
                    if (typeof object.index === "string")
                        $util.base64.decode(object.index, message.index = $util.newBuffer($util.base64.length(object.index)), 0);
                    else if (object.index.length)
                        message.index = object.index;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                if (object.ledgerSeq != null)
                    message.ledgerSeq = object.ledgerSeq >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMIndexedObject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMIndexedObject
             * @static
             * @param {protocol.TMIndexedObject} message TMIndexedObject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMIndexedObject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.hash = "";
                    else {
                        object.hash = [];
                        if (options.bytes !== Array)
                            object.hash = $util.newBuffer(object.hash);
                    }
                    if (options.bytes === String)
                        object.nodeID = "";
                    else {
                        object.nodeID = [];
                        if (options.bytes !== Array)
                            object.nodeID = $util.newBuffer(object.nodeID);
                    }
                    if (options.bytes === String)
                        object.index = "";
                    else {
                        object.index = [];
                        if (options.bytes !== Array)
                            object.index = $util.newBuffer(object.index);
                    }
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                    object.ledgerSeq = 0;
                }
                if (message.hash != null && message.hasOwnProperty("hash"))
                    object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
                if (message.nodeID != null && message.hasOwnProperty("nodeID"))
                    object.nodeID = options.bytes === String ? $util.base64.encode(message.nodeID, 0, message.nodeID.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeID) : message.nodeID;
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = options.bytes === String ? $util.base64.encode(message.index, 0, message.index.length) : options.bytes === Array ? Array.prototype.slice.call(message.index) : message.index;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    object.ledgerSeq = message.ledgerSeq;
                return object;
            };
    
            /**
             * Converts this TMIndexedObject to JSON.
             * @function toJSON
             * @memberof protocol.TMIndexedObject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMIndexedObject.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMIndexedObject;
        })();
    
        protocol.TMGetObjectByHash = (function() {
    
            /**
             * Properties of a TMGetObjectByHash.
             * @memberof protocol
             * @interface ITMGetObjectByHash
             * @property {protocol.TMGetObjectByHash.ObjectType} type TMGetObjectByHash type
             * @property {boolean} query TMGetObjectByHash query
             * @property {number|null} [seq] TMGetObjectByHash seq
             * @property {Uint8Array|null} [ledgerHash] TMGetObjectByHash ledgerHash
             * @property {boolean|null} [fat] TMGetObjectByHash fat
             * @property {Array.<protocol.ITMIndexedObject>|null} [objects] TMGetObjectByHash objects
             */
    
            /**
             * Constructs a new TMGetObjectByHash.
             * @memberof protocol
             * @classdesc Represents a TMGetObjectByHash.
             * @implements ITMGetObjectByHash
             * @constructor
             * @param {protocol.ITMGetObjectByHash=} [properties] Properties to set
             */
            function TMGetObjectByHash(properties) {
                this.objects = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMGetObjectByHash type.
             * @member {protocol.TMGetObjectByHash.ObjectType} type
             * @memberof protocol.TMGetObjectByHash
             * @instance
             */
            TMGetObjectByHash.prototype.type = 0;
    
            /**
             * TMGetObjectByHash query.
             * @member {boolean} query
             * @memberof protocol.TMGetObjectByHash
             * @instance
             */
            TMGetObjectByHash.prototype.query = false;
    
            /**
             * TMGetObjectByHash seq.
             * @member {number} seq
             * @memberof protocol.TMGetObjectByHash
             * @instance
             */
            TMGetObjectByHash.prototype.seq = 0;
    
            /**
             * TMGetObjectByHash ledgerHash.
             * @member {Uint8Array} ledgerHash
             * @memberof protocol.TMGetObjectByHash
             * @instance
             */
            TMGetObjectByHash.prototype.ledgerHash = $util.newBuffer([]);
    
            /**
             * TMGetObjectByHash fat.
             * @member {boolean} fat
             * @memberof protocol.TMGetObjectByHash
             * @instance
             */
            TMGetObjectByHash.prototype.fat = false;
    
            /**
             * TMGetObjectByHash objects.
             * @member {Array.<protocol.ITMIndexedObject>} objects
             * @memberof protocol.TMGetObjectByHash
             * @instance
             */
            TMGetObjectByHash.prototype.objects = $util.emptyArray;
    
            /**
             * Creates a new TMGetObjectByHash instance using the specified properties.
             * @function create
             * @memberof protocol.TMGetObjectByHash
             * @static
             * @param {protocol.ITMGetObjectByHash=} [properties] Properties to set
             * @returns {protocol.TMGetObjectByHash} TMGetObjectByHash instance
             */
            TMGetObjectByHash.create = function create(properties) {
                return new TMGetObjectByHash(properties);
            };
    
            /**
             * Encodes the specified TMGetObjectByHash message. Does not implicitly {@link protocol.TMGetObjectByHash.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMGetObjectByHash
             * @static
             * @param {protocol.ITMGetObjectByHash} message TMGetObjectByHash message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMGetObjectByHash.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.query);
                if (message.seq != null && message.hasOwnProperty("seq"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.seq);
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ledgerHash);
                if (message.fat != null && message.hasOwnProperty("fat"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.fat);
                if (message.objects != null && message.objects.length)
                    for (var i = 0; i < message.objects.length; ++i)
                        $root.protocol.TMIndexedObject.encode(message.objects[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TMGetObjectByHash message, length delimited. Does not implicitly {@link protocol.TMGetObjectByHash.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMGetObjectByHash
             * @static
             * @param {protocol.ITMGetObjectByHash} message TMGetObjectByHash message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMGetObjectByHash.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMGetObjectByHash message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMGetObjectByHash
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMGetObjectByHash} TMGetObjectByHash
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMGetObjectByHash.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMGetObjectByHash();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.query = reader.bool();
                        break;
                    case 3:
                        message.seq = reader.uint32();
                        break;
                    case 4:
                        message.ledgerHash = reader.bytes();
                        break;
                    case 5:
                        message.fat = reader.bool();
                        break;
                    case 6:
                        if (!(message.objects && message.objects.length))
                            message.objects = [];
                        message.objects.push($root.protocol.TMIndexedObject.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                if (!message.hasOwnProperty("query"))
                    throw $util.ProtocolError("missing required 'query'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMGetObjectByHash message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMGetObjectByHash
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMGetObjectByHash} TMGetObjectByHash
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMGetObjectByHash.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMGetObjectByHash message.
             * @function verify
             * @memberof protocol.TMGetObjectByHash
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMGetObjectByHash.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
                if (typeof message.query !== "boolean")
                    return "query: boolean expected";
                if (message.seq != null && message.hasOwnProperty("seq"))
                    if (!$util.isInteger(message.seq))
                        return "seq: integer expected";
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    if (!(message.ledgerHash && typeof message.ledgerHash.length === "number" || $util.isString(message.ledgerHash)))
                        return "ledgerHash: buffer expected";
                if (message.fat != null && message.hasOwnProperty("fat"))
                    if (typeof message.fat !== "boolean")
                        return "fat: boolean expected";
                if (message.objects != null && message.hasOwnProperty("objects")) {
                    if (!Array.isArray(message.objects))
                        return "objects: array expected";
                    for (var i = 0; i < message.objects.length; ++i) {
                        var error = $root.protocol.TMIndexedObject.verify(message.objects[i]);
                        if (error)
                            return "objects." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TMGetObjectByHash message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMGetObjectByHash
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMGetObjectByHash} TMGetObjectByHash
             */
            TMGetObjectByHash.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMGetObjectByHash)
                    return object;
                var message = new $root.protocol.TMGetObjectByHash();
                switch (object.type) {
                case "otUNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "otLEDGER":
                case 1:
                    message.type = 1;
                    break;
                case "otTRANSACTION":
                case 2:
                    message.type = 2;
                    break;
                case "otTRANSACTION_NODE":
                case 3:
                    message.type = 3;
                    break;
                case "otSTATE_NODE":
                case 4:
                    message.type = 4;
                    break;
                case "otCAS_OBJECT":
                case 5:
                    message.type = 5;
                    break;
                case "otFETCH_PACK":
                case 6:
                    message.type = 6;
                    break;
                }
                if (object.query != null)
                    message.query = Boolean(object.query);
                if (object.seq != null)
                    message.seq = object.seq >>> 0;
                if (object.ledgerHash != null)
                    if (typeof object.ledgerHash === "string")
                        $util.base64.decode(object.ledgerHash, message.ledgerHash = $util.newBuffer($util.base64.length(object.ledgerHash)), 0);
                    else if (object.ledgerHash.length)
                        message.ledgerHash = object.ledgerHash;
                if (object.fat != null)
                    message.fat = Boolean(object.fat);
                if (object.objects) {
                    if (!Array.isArray(object.objects))
                        throw TypeError(".protocol.TMGetObjectByHash.objects: array expected");
                    message.objects = [];
                    for (var i = 0; i < object.objects.length; ++i) {
                        if (typeof object.objects[i] !== "object")
                            throw TypeError(".protocol.TMGetObjectByHash.objects: object expected");
                        message.objects[i] = $root.protocol.TMIndexedObject.fromObject(object.objects[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TMGetObjectByHash message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMGetObjectByHash
             * @static
             * @param {protocol.TMGetObjectByHash} message TMGetObjectByHash
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMGetObjectByHash.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.objects = [];
                if (options.defaults) {
                    object.type = options.enums === String ? "otUNKNOWN" : 0;
                    object.query = false;
                    object.seq = 0;
                    if (options.bytes === String)
                        object.ledgerHash = "";
                    else {
                        object.ledgerHash = [];
                        if (options.bytes !== Array)
                            object.ledgerHash = $util.newBuffer(object.ledgerHash);
                    }
                    object.fat = false;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.protocol.TMGetObjectByHash.ObjectType[message.type] : message.type;
                if (message.query != null && message.hasOwnProperty("query"))
                    object.query = message.query;
                if (message.seq != null && message.hasOwnProperty("seq"))
                    object.seq = message.seq;
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    object.ledgerHash = options.bytes === String ? $util.base64.encode(message.ledgerHash, 0, message.ledgerHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.ledgerHash) : message.ledgerHash;
                if (message.fat != null && message.hasOwnProperty("fat"))
                    object.fat = message.fat;
                if (message.objects && message.objects.length) {
                    object.objects = [];
                    for (var j = 0; j < message.objects.length; ++j)
                        object.objects[j] = $root.protocol.TMIndexedObject.toObject(message.objects[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TMGetObjectByHash to JSON.
             * @function toJSON
             * @memberof protocol.TMGetObjectByHash
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMGetObjectByHash.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * ObjectType enum.
             * @name protocol.TMGetObjectByHash.ObjectType
             * @enum {string}
             * @property {number} otUNKNOWN=0 otUNKNOWN value
             * @property {number} otLEDGER=1 otLEDGER value
             * @property {number} otTRANSACTION=2 otTRANSACTION value
             * @property {number} otTRANSACTION_NODE=3 otTRANSACTION_NODE value
             * @property {number} otSTATE_NODE=4 otSTATE_NODE value
             * @property {number} otCAS_OBJECT=5 otCAS_OBJECT value
             * @property {number} otFETCH_PACK=6 otFETCH_PACK value
             */
            TMGetObjectByHash.ObjectType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "otUNKNOWN"] = 0;
                values[valuesById[1] = "otLEDGER"] = 1;
                values[valuesById[2] = "otTRANSACTION"] = 2;
                values[valuesById[3] = "otTRANSACTION_NODE"] = 3;
                values[valuesById[4] = "otSTATE_NODE"] = 4;
                values[valuesById[5] = "otCAS_OBJECT"] = 5;
                values[valuesById[6] = "otFETCH_PACK"] = 6;
                return values;
            })();
    
            return TMGetObjectByHash;
        })();
    
        protocol.TMLedgerNode = (function() {
    
            /**
             * Properties of a TMLedgerNode.
             * @memberof protocol
             * @interface ITMLedgerNode
             * @property {Uint8Array} nodedata TMLedgerNode nodedata
             * @property {Uint8Array|null} [nodeid] TMLedgerNode nodeid
             */
    
            /**
             * Constructs a new TMLedgerNode.
             * @memberof protocol
             * @classdesc Represents a TMLedgerNode.
             * @implements ITMLedgerNode
             * @constructor
             * @param {protocol.ITMLedgerNode=} [properties] Properties to set
             */
            function TMLedgerNode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMLedgerNode nodedata.
             * @member {Uint8Array} nodedata
             * @memberof protocol.TMLedgerNode
             * @instance
             */
            TMLedgerNode.prototype.nodedata = $util.newBuffer([]);
    
            /**
             * TMLedgerNode nodeid.
             * @member {Uint8Array} nodeid
             * @memberof protocol.TMLedgerNode
             * @instance
             */
            TMLedgerNode.prototype.nodeid = $util.newBuffer([]);
    
            /**
             * Creates a new TMLedgerNode instance using the specified properties.
             * @function create
             * @memberof protocol.TMLedgerNode
             * @static
             * @param {protocol.ITMLedgerNode=} [properties] Properties to set
             * @returns {protocol.TMLedgerNode} TMLedgerNode instance
             */
            TMLedgerNode.create = function create(properties) {
                return new TMLedgerNode(properties);
            };
    
            /**
             * Encodes the specified TMLedgerNode message. Does not implicitly {@link protocol.TMLedgerNode.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMLedgerNode
             * @static
             * @param {protocol.ITMLedgerNode} message TMLedgerNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMLedgerNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nodedata);
                if (message.nodeid != null && message.hasOwnProperty("nodeid"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.nodeid);
                return writer;
            };
    
            /**
             * Encodes the specified TMLedgerNode message, length delimited. Does not implicitly {@link protocol.TMLedgerNode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMLedgerNode
             * @static
             * @param {protocol.ITMLedgerNode} message TMLedgerNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMLedgerNode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMLedgerNode message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMLedgerNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMLedgerNode} TMLedgerNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMLedgerNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMLedgerNode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nodedata = reader.bytes();
                        break;
                    case 2:
                        message.nodeid = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("nodedata"))
                    throw $util.ProtocolError("missing required 'nodedata'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMLedgerNode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMLedgerNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMLedgerNode} TMLedgerNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMLedgerNode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMLedgerNode message.
             * @function verify
             * @memberof protocol.TMLedgerNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMLedgerNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!(message.nodedata && typeof message.nodedata.length === "number" || $util.isString(message.nodedata)))
                    return "nodedata: buffer expected";
                if (message.nodeid != null && message.hasOwnProperty("nodeid"))
                    if (!(message.nodeid && typeof message.nodeid.length === "number" || $util.isString(message.nodeid)))
                        return "nodeid: buffer expected";
                return null;
            };
    
            /**
             * Creates a TMLedgerNode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMLedgerNode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMLedgerNode} TMLedgerNode
             */
            TMLedgerNode.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMLedgerNode)
                    return object;
                var message = new $root.protocol.TMLedgerNode();
                if (object.nodedata != null)
                    if (typeof object.nodedata === "string")
                        $util.base64.decode(object.nodedata, message.nodedata = $util.newBuffer($util.base64.length(object.nodedata)), 0);
                    else if (object.nodedata.length)
                        message.nodedata = object.nodedata;
                if (object.nodeid != null)
                    if (typeof object.nodeid === "string")
                        $util.base64.decode(object.nodeid, message.nodeid = $util.newBuffer($util.base64.length(object.nodeid)), 0);
                    else if (object.nodeid.length)
                        message.nodeid = object.nodeid;
                return message;
            };
    
            /**
             * Creates a plain object from a TMLedgerNode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMLedgerNode
             * @static
             * @param {protocol.TMLedgerNode} message TMLedgerNode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMLedgerNode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.nodedata = "";
                    else {
                        object.nodedata = [];
                        if (options.bytes !== Array)
                            object.nodedata = $util.newBuffer(object.nodedata);
                    }
                    if (options.bytes === String)
                        object.nodeid = "";
                    else {
                        object.nodeid = [];
                        if (options.bytes !== Array)
                            object.nodeid = $util.newBuffer(object.nodeid);
                    }
                }
                if (message.nodedata != null && message.hasOwnProperty("nodedata"))
                    object.nodedata = options.bytes === String ? $util.base64.encode(message.nodedata, 0, message.nodedata.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodedata) : message.nodedata;
                if (message.nodeid != null && message.hasOwnProperty("nodeid"))
                    object.nodeid = options.bytes === String ? $util.base64.encode(message.nodeid, 0, message.nodeid.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeid) : message.nodeid;
                return object;
            };
    
            /**
             * Converts this TMLedgerNode to JSON.
             * @function toJSON
             * @memberof protocol.TMLedgerNode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMLedgerNode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMLedgerNode;
        })();
    
        /**
         * TMLedgerInfoType enum.
         * @name protocol.TMLedgerInfoType
         * @enum {string}
         * @property {number} liBASE=0 liBASE value
         * @property {number} liTX_NODE=1 liTX_NODE value
         * @property {number} liAS_NODE=2 liAS_NODE value
         * @property {number} liTS_CANDIDATE=3 liTS_CANDIDATE value
         */
        protocol.TMLedgerInfoType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "liBASE"] = 0;
            values[valuesById[1] = "liTX_NODE"] = 1;
            values[valuesById[2] = "liAS_NODE"] = 2;
            values[valuesById[3] = "liTS_CANDIDATE"] = 3;
            return values;
        })();
    
        /**
         * TMLedgerType enum.
         * @name protocol.TMLedgerType
         * @enum {string}
         * @property {number} ltACCEPTED=0 ltACCEPTED value
         * @property {number} ltCURRENT=1 ltCURRENT value
         * @property {number} ltCLOSED=2 ltCLOSED value
         */
        protocol.TMLedgerType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ltACCEPTED"] = 0;
            values[valuesById[1] = "ltCURRENT"] = 1;
            values[valuesById[2] = "ltCLOSED"] = 2;
            return values;
        })();
    
        /**
         * TMQueryType enum.
         * @name protocol.TMQueryType
         * @enum {string}
         * @property {number} qtINDIRECT=0 qtINDIRECT value
         */
        protocol.TMQueryType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "qtINDIRECT"] = 0;
            return values;
        })();
    
        protocol.TMGetLedger = (function() {
    
            /**
             * Properties of a TMGetLedger.
             * @memberof protocol
             * @interface ITMGetLedger
             * @property {protocol.TMLedgerInfoType} itype TMGetLedger itype
             * @property {protocol.TMLedgerType|null} [ltype] TMGetLedger ltype
             * @property {Uint8Array|null} [ledgerHash] TMGetLedger ledgerHash
             * @property {number|null} [ledgerSeq] TMGetLedger ledgerSeq
             * @property {Array.<Uint8Array>|null} [nodeIDs] TMGetLedger nodeIDs
             * @property {number|Long|null} [requestCookie] TMGetLedger requestCookie
             * @property {protocol.TMQueryType|null} [queryType] TMGetLedger queryType
             * @property {number|null} [queryDepth] TMGetLedger queryDepth
             */
    
            /**
             * Constructs a new TMGetLedger.
             * @memberof protocol
             * @classdesc Represents a TMGetLedger.
             * @implements ITMGetLedger
             * @constructor
             * @param {protocol.ITMGetLedger=} [properties] Properties to set
             */
            function TMGetLedger(properties) {
                this.nodeIDs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMGetLedger itype.
             * @member {protocol.TMLedgerInfoType} itype
             * @memberof protocol.TMGetLedger
             * @instance
             */
            TMGetLedger.prototype.itype = 0;
    
            /**
             * TMGetLedger ltype.
             * @member {protocol.TMLedgerType} ltype
             * @memberof protocol.TMGetLedger
             * @instance
             */
            TMGetLedger.prototype.ltype = 0;
    
            /**
             * TMGetLedger ledgerHash.
             * @member {Uint8Array} ledgerHash
             * @memberof protocol.TMGetLedger
             * @instance
             */
            TMGetLedger.prototype.ledgerHash = $util.newBuffer([]);
    
            /**
             * TMGetLedger ledgerSeq.
             * @member {number} ledgerSeq
             * @memberof protocol.TMGetLedger
             * @instance
             */
            TMGetLedger.prototype.ledgerSeq = 0;
    
            /**
             * TMGetLedger nodeIDs.
             * @member {Array.<Uint8Array>} nodeIDs
             * @memberof protocol.TMGetLedger
             * @instance
             */
            TMGetLedger.prototype.nodeIDs = $util.emptyArray;
    
            /**
             * TMGetLedger requestCookie.
             * @member {number|Long} requestCookie
             * @memberof protocol.TMGetLedger
             * @instance
             */
            TMGetLedger.prototype.requestCookie = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TMGetLedger queryType.
             * @member {protocol.TMQueryType} queryType
             * @memberof protocol.TMGetLedger
             * @instance
             */
            TMGetLedger.prototype.queryType = 0;
    
            /**
             * TMGetLedger queryDepth.
             * @member {number} queryDepth
             * @memberof protocol.TMGetLedger
             * @instance
             */
            TMGetLedger.prototype.queryDepth = 0;
    
            /**
             * Creates a new TMGetLedger instance using the specified properties.
             * @function create
             * @memberof protocol.TMGetLedger
             * @static
             * @param {protocol.ITMGetLedger=} [properties] Properties to set
             * @returns {protocol.TMGetLedger} TMGetLedger instance
             */
            TMGetLedger.create = function create(properties) {
                return new TMGetLedger(properties);
            };
    
            /**
             * Encodes the specified TMGetLedger message. Does not implicitly {@link protocol.TMGetLedger.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMGetLedger
             * @static
             * @param {protocol.ITMGetLedger} message TMGetLedger message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMGetLedger.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itype);
                if (message.ltype != null && message.hasOwnProperty("ltype"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ltype);
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ledgerHash);
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ledgerSeq);
                if (message.nodeIDs != null && message.nodeIDs.length)
                    for (var i = 0; i < message.nodeIDs.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.nodeIDs[i]);
                if (message.requestCookie != null && message.hasOwnProperty("requestCookie"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.requestCookie);
                if (message.queryType != null && message.hasOwnProperty("queryType"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.queryType);
                if (message.queryDepth != null && message.hasOwnProperty("queryDepth"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.queryDepth);
                return writer;
            };
    
            /**
             * Encodes the specified TMGetLedger message, length delimited. Does not implicitly {@link protocol.TMGetLedger.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMGetLedger
             * @static
             * @param {protocol.ITMGetLedger} message TMGetLedger message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMGetLedger.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMGetLedger message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMGetLedger
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMGetLedger} TMGetLedger
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMGetLedger.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMGetLedger();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.itype = reader.int32();
                        break;
                    case 2:
                        message.ltype = reader.int32();
                        break;
                    case 3:
                        message.ledgerHash = reader.bytes();
                        break;
                    case 4:
                        message.ledgerSeq = reader.uint32();
                        break;
                    case 5:
                        if (!(message.nodeIDs && message.nodeIDs.length))
                            message.nodeIDs = [];
                        message.nodeIDs.push(reader.bytes());
                        break;
                    case 6:
                        message.requestCookie = reader.uint64();
                        break;
                    case 7:
                        message.queryType = reader.int32();
                        break;
                    case 8:
                        message.queryDepth = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("itype"))
                    throw $util.ProtocolError("missing required 'itype'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMGetLedger message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMGetLedger
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMGetLedger} TMGetLedger
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMGetLedger.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMGetLedger message.
             * @function verify
             * @memberof protocol.TMGetLedger
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMGetLedger.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.itype) {
                default:
                    return "itype: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (message.ltype != null && message.hasOwnProperty("ltype"))
                    switch (message.ltype) {
                    default:
                        return "ltype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    if (!(message.ledgerHash && typeof message.ledgerHash.length === "number" || $util.isString(message.ledgerHash)))
                        return "ledgerHash: buffer expected";
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    if (!$util.isInteger(message.ledgerSeq))
                        return "ledgerSeq: integer expected";
                if (message.nodeIDs != null && message.hasOwnProperty("nodeIDs")) {
                    if (!Array.isArray(message.nodeIDs))
                        return "nodeIDs: array expected";
                    for (var i = 0; i < message.nodeIDs.length; ++i)
                        if (!(message.nodeIDs[i] && typeof message.nodeIDs[i].length === "number" || $util.isString(message.nodeIDs[i])))
                            return "nodeIDs: buffer[] expected";
                }
                if (message.requestCookie != null && message.hasOwnProperty("requestCookie"))
                    if (!$util.isInteger(message.requestCookie) && !(message.requestCookie && $util.isInteger(message.requestCookie.low) && $util.isInteger(message.requestCookie.high)))
                        return "requestCookie: integer|Long expected";
                if (message.queryType != null && message.hasOwnProperty("queryType"))
                    switch (message.queryType) {
                    default:
                        return "queryType: enum value expected";
                    case 0:
                        break;
                    }
                if (message.queryDepth != null && message.hasOwnProperty("queryDepth"))
                    if (!$util.isInteger(message.queryDepth))
                        return "queryDepth: integer expected";
                return null;
            };
    
            /**
             * Creates a TMGetLedger message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMGetLedger
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMGetLedger} TMGetLedger
             */
            TMGetLedger.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMGetLedger)
                    return object;
                var message = new $root.protocol.TMGetLedger();
                switch (object.itype) {
                case "liBASE":
                case 0:
                    message.itype = 0;
                    break;
                case "liTX_NODE":
                case 1:
                    message.itype = 1;
                    break;
                case "liAS_NODE":
                case 2:
                    message.itype = 2;
                    break;
                case "liTS_CANDIDATE":
                case 3:
                    message.itype = 3;
                    break;
                }
                switch (object.ltype) {
                case "ltACCEPTED":
                case 0:
                    message.ltype = 0;
                    break;
                case "ltCURRENT":
                case 1:
                    message.ltype = 1;
                    break;
                case "ltCLOSED":
                case 2:
                    message.ltype = 2;
                    break;
                }
                if (object.ledgerHash != null)
                    if (typeof object.ledgerHash === "string")
                        $util.base64.decode(object.ledgerHash, message.ledgerHash = $util.newBuffer($util.base64.length(object.ledgerHash)), 0);
                    else if (object.ledgerHash.length)
                        message.ledgerHash = object.ledgerHash;
                if (object.ledgerSeq != null)
                    message.ledgerSeq = object.ledgerSeq >>> 0;
                if (object.nodeIDs) {
                    if (!Array.isArray(object.nodeIDs))
                        throw TypeError(".protocol.TMGetLedger.nodeIDs: array expected");
                    message.nodeIDs = [];
                    for (var i = 0; i < object.nodeIDs.length; ++i)
                        if (typeof object.nodeIDs[i] === "string")
                            $util.base64.decode(object.nodeIDs[i], message.nodeIDs[i] = $util.newBuffer($util.base64.length(object.nodeIDs[i])), 0);
                        else if (object.nodeIDs[i].length)
                            message.nodeIDs[i] = object.nodeIDs[i];
                }
                if (object.requestCookie != null)
                    if ($util.Long)
                        (message.requestCookie = $util.Long.fromValue(object.requestCookie)).unsigned = true;
                    else if (typeof object.requestCookie === "string")
                        message.requestCookie = parseInt(object.requestCookie, 10);
                    else if (typeof object.requestCookie === "number")
                        message.requestCookie = object.requestCookie;
                    else if (typeof object.requestCookie === "object")
                        message.requestCookie = new $util.LongBits(object.requestCookie.low >>> 0, object.requestCookie.high >>> 0).toNumber(true);
                switch (object.queryType) {
                case "qtINDIRECT":
                case 0:
                    message.queryType = 0;
                    break;
                }
                if (object.queryDepth != null)
                    message.queryDepth = object.queryDepth >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TMGetLedger message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMGetLedger
             * @static
             * @param {protocol.TMGetLedger} message TMGetLedger
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMGetLedger.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.nodeIDs = [];
                if (options.defaults) {
                    object.itype = options.enums === String ? "liBASE" : 0;
                    object.ltype = options.enums === String ? "ltACCEPTED" : 0;
                    if (options.bytes === String)
                        object.ledgerHash = "";
                    else {
                        object.ledgerHash = [];
                        if (options.bytes !== Array)
                            object.ledgerHash = $util.newBuffer(object.ledgerHash);
                    }
                    object.ledgerSeq = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.requestCookie = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.requestCookie = options.longs === String ? "0" : 0;
                    object.queryType = options.enums === String ? "qtINDIRECT" : 0;
                    object.queryDepth = 0;
                }
                if (message.itype != null && message.hasOwnProperty("itype"))
                    object.itype = options.enums === String ? $root.protocol.TMLedgerInfoType[message.itype] : message.itype;
                if (message.ltype != null && message.hasOwnProperty("ltype"))
                    object.ltype = options.enums === String ? $root.protocol.TMLedgerType[message.ltype] : message.ltype;
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    object.ledgerHash = options.bytes === String ? $util.base64.encode(message.ledgerHash, 0, message.ledgerHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.ledgerHash) : message.ledgerHash;
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    object.ledgerSeq = message.ledgerSeq;
                if (message.nodeIDs && message.nodeIDs.length) {
                    object.nodeIDs = [];
                    for (var j = 0; j < message.nodeIDs.length; ++j)
                        object.nodeIDs[j] = options.bytes === String ? $util.base64.encode(message.nodeIDs[j], 0, message.nodeIDs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeIDs[j]) : message.nodeIDs[j];
                }
                if (message.requestCookie != null && message.hasOwnProperty("requestCookie"))
                    if (typeof message.requestCookie === "number")
                        object.requestCookie = options.longs === String ? String(message.requestCookie) : message.requestCookie;
                    else
                        object.requestCookie = options.longs === String ? $util.Long.prototype.toString.call(message.requestCookie) : options.longs === Number ? new $util.LongBits(message.requestCookie.low >>> 0, message.requestCookie.high >>> 0).toNumber(true) : message.requestCookie;
                if (message.queryType != null && message.hasOwnProperty("queryType"))
                    object.queryType = options.enums === String ? $root.protocol.TMQueryType[message.queryType] : message.queryType;
                if (message.queryDepth != null && message.hasOwnProperty("queryDepth"))
                    object.queryDepth = message.queryDepth;
                return object;
            };
    
            /**
             * Converts this TMGetLedger to JSON.
             * @function toJSON
             * @memberof protocol.TMGetLedger
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMGetLedger.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMGetLedger;
        })();
    
        /**
         * TMReplyError enum.
         * @name protocol.TMReplyError
         * @enum {string}
         * @property {number} reNO_LEDGER=1 reNO_LEDGER value
         * @property {number} reNO_NODE=2 reNO_NODE value
         */
        protocol.TMReplyError = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "reNO_LEDGER"] = 1;
            values[valuesById[2] = "reNO_NODE"] = 2;
            return values;
        })();
    
        protocol.TMLedgerData = (function() {
    
            /**
             * Properties of a TMLedgerData.
             * @memberof protocol
             * @interface ITMLedgerData
             * @property {Uint8Array} ledgerHash TMLedgerData ledgerHash
             * @property {number} ledgerSeq TMLedgerData ledgerSeq
             * @property {protocol.TMLedgerInfoType} type TMLedgerData type
             * @property {Array.<protocol.ITMLedgerNode>|null} [nodes] TMLedgerData nodes
             * @property {number|null} [requestCookie] TMLedgerData requestCookie
             * @property {protocol.TMReplyError|null} [error] TMLedgerData error
             */
    
            /**
             * Constructs a new TMLedgerData.
             * @memberof protocol
             * @classdesc Represents a TMLedgerData.
             * @implements ITMLedgerData
             * @constructor
             * @param {protocol.ITMLedgerData=} [properties] Properties to set
             */
            function TMLedgerData(properties) {
                this.nodes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMLedgerData ledgerHash.
             * @member {Uint8Array} ledgerHash
             * @memberof protocol.TMLedgerData
             * @instance
             */
            TMLedgerData.prototype.ledgerHash = $util.newBuffer([]);
    
            /**
             * TMLedgerData ledgerSeq.
             * @member {number} ledgerSeq
             * @memberof protocol.TMLedgerData
             * @instance
             */
            TMLedgerData.prototype.ledgerSeq = 0;
    
            /**
             * TMLedgerData type.
             * @member {protocol.TMLedgerInfoType} type
             * @memberof protocol.TMLedgerData
             * @instance
             */
            TMLedgerData.prototype.type = 0;
    
            /**
             * TMLedgerData nodes.
             * @member {Array.<protocol.ITMLedgerNode>} nodes
             * @memberof protocol.TMLedgerData
             * @instance
             */
            TMLedgerData.prototype.nodes = $util.emptyArray;
    
            /**
             * TMLedgerData requestCookie.
             * @member {number} requestCookie
             * @memberof protocol.TMLedgerData
             * @instance
             */
            TMLedgerData.prototype.requestCookie = 0;
    
            /**
             * TMLedgerData error.
             * @member {protocol.TMReplyError} error
             * @memberof protocol.TMLedgerData
             * @instance
             */
            TMLedgerData.prototype.error = 1;
    
            /**
             * Creates a new TMLedgerData instance using the specified properties.
             * @function create
             * @memberof protocol.TMLedgerData
             * @static
             * @param {protocol.ITMLedgerData=} [properties] Properties to set
             * @returns {protocol.TMLedgerData} TMLedgerData instance
             */
            TMLedgerData.create = function create(properties) {
                return new TMLedgerData(properties);
            };
    
            /**
             * Encodes the specified TMLedgerData message. Does not implicitly {@link protocol.TMLedgerData.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMLedgerData
             * @static
             * @param {protocol.ITMLedgerData} message TMLedgerData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMLedgerData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ledgerHash);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ledgerSeq);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                if (message.nodes != null && message.nodes.length)
                    for (var i = 0; i < message.nodes.length; ++i)
                        $root.protocol.TMLedgerNode.encode(message.nodes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.requestCookie != null && message.hasOwnProperty("requestCookie"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.requestCookie);
                if (message.error != null && message.hasOwnProperty("error"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.error);
                return writer;
            };
    
            /**
             * Encodes the specified TMLedgerData message, length delimited. Does not implicitly {@link protocol.TMLedgerData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMLedgerData
             * @static
             * @param {protocol.ITMLedgerData} message TMLedgerData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMLedgerData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMLedgerData message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMLedgerData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMLedgerData} TMLedgerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMLedgerData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMLedgerData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ledgerHash = reader.bytes();
                        break;
                    case 2:
                        message.ledgerSeq = reader.uint32();
                        break;
                    case 3:
                        message.type = reader.int32();
                        break;
                    case 4:
                        if (!(message.nodes && message.nodes.length))
                            message.nodes = [];
                        message.nodes.push($root.protocol.TMLedgerNode.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.requestCookie = reader.uint32();
                        break;
                    case 6:
                        message.error = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ledgerHash"))
                    throw $util.ProtocolError("missing required 'ledgerHash'", { instance: message });
                if (!message.hasOwnProperty("ledgerSeq"))
                    throw $util.ProtocolError("missing required 'ledgerSeq'", { instance: message });
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMLedgerData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMLedgerData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMLedgerData} TMLedgerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMLedgerData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMLedgerData message.
             * @function verify
             * @memberof protocol.TMLedgerData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMLedgerData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!(message.ledgerHash && typeof message.ledgerHash.length === "number" || $util.isString(message.ledgerHash)))
                    return "ledgerHash: buffer expected";
                if (!$util.isInteger(message.ledgerSeq))
                    return "ledgerSeq: integer expected";
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
                if (message.nodes != null && message.hasOwnProperty("nodes")) {
                    if (!Array.isArray(message.nodes))
                        return "nodes: array expected";
                    for (var i = 0; i < message.nodes.length; ++i) {
                        var error = $root.protocol.TMLedgerNode.verify(message.nodes[i]);
                        if (error)
                            return "nodes." + error;
                    }
                }
                if (message.requestCookie != null && message.hasOwnProperty("requestCookie"))
                    if (!$util.isInteger(message.requestCookie))
                        return "requestCookie: integer expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    switch (message.error) {
                    default:
                        return "error: enum value expected";
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a TMLedgerData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMLedgerData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMLedgerData} TMLedgerData
             */
            TMLedgerData.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMLedgerData)
                    return object;
                var message = new $root.protocol.TMLedgerData();
                if (object.ledgerHash != null)
                    if (typeof object.ledgerHash === "string")
                        $util.base64.decode(object.ledgerHash, message.ledgerHash = $util.newBuffer($util.base64.length(object.ledgerHash)), 0);
                    else if (object.ledgerHash.length)
                        message.ledgerHash = object.ledgerHash;
                if (object.ledgerSeq != null)
                    message.ledgerSeq = object.ledgerSeq >>> 0;
                switch (object.type) {
                case "liBASE":
                case 0:
                    message.type = 0;
                    break;
                case "liTX_NODE":
                case 1:
                    message.type = 1;
                    break;
                case "liAS_NODE":
                case 2:
                    message.type = 2;
                    break;
                case "liTS_CANDIDATE":
                case 3:
                    message.type = 3;
                    break;
                }
                if (object.nodes) {
                    if (!Array.isArray(object.nodes))
                        throw TypeError(".protocol.TMLedgerData.nodes: array expected");
                    message.nodes = [];
                    for (var i = 0; i < object.nodes.length; ++i) {
                        if (typeof object.nodes[i] !== "object")
                            throw TypeError(".protocol.TMLedgerData.nodes: object expected");
                        message.nodes[i] = $root.protocol.TMLedgerNode.fromObject(object.nodes[i]);
                    }
                }
                if (object.requestCookie != null)
                    message.requestCookie = object.requestCookie >>> 0;
                switch (object.error) {
                case "reNO_LEDGER":
                case 1:
                    message.error = 1;
                    break;
                case "reNO_NODE":
                case 2:
                    message.error = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TMLedgerData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMLedgerData
             * @static
             * @param {protocol.TMLedgerData} message TMLedgerData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMLedgerData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.nodes = [];
                if (options.defaults) {
                    if (options.bytes === String)
                        object.ledgerHash = "";
                    else {
                        object.ledgerHash = [];
                        if (options.bytes !== Array)
                            object.ledgerHash = $util.newBuffer(object.ledgerHash);
                    }
                    object.ledgerSeq = 0;
                    object.type = options.enums === String ? "liBASE" : 0;
                    object.requestCookie = 0;
                    object.error = options.enums === String ? "reNO_LEDGER" : 1;
                }
                if (message.ledgerHash != null && message.hasOwnProperty("ledgerHash"))
                    object.ledgerHash = options.bytes === String ? $util.base64.encode(message.ledgerHash, 0, message.ledgerHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.ledgerHash) : message.ledgerHash;
                if (message.ledgerSeq != null && message.hasOwnProperty("ledgerSeq"))
                    object.ledgerSeq = message.ledgerSeq;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.protocol.TMLedgerInfoType[message.type] : message.type;
                if (message.nodes && message.nodes.length) {
                    object.nodes = [];
                    for (var j = 0; j < message.nodes.length; ++j)
                        object.nodes[j] = $root.protocol.TMLedgerNode.toObject(message.nodes[j], options);
                }
                if (message.requestCookie != null && message.hasOwnProperty("requestCookie"))
                    object.requestCookie = message.requestCookie;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = options.enums === String ? $root.protocol.TMReplyError[message.error] : message.error;
                return object;
            };
    
            /**
             * Converts this TMLedgerData to JSON.
             * @function toJSON
             * @memberof protocol.TMLedgerData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMLedgerData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TMLedgerData;
        })();
    
        protocol.TMPing = (function() {
    
            /**
             * Properties of a TMPing.
             * @memberof protocol
             * @interface ITMPing
             * @property {protocol.TMPing.pingType} type TMPing type
             * @property {number|null} [seq] TMPing seq
             * @property {number|Long|null} [pingTime] TMPing pingTime
             * @property {number|Long|null} [netTime] TMPing netTime
             */
    
            /**
             * Constructs a new TMPing.
             * @memberof protocol
             * @classdesc Represents a TMPing.
             * @implements ITMPing
             * @constructor
             * @param {protocol.ITMPing=} [properties] Properties to set
             */
            function TMPing(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TMPing type.
             * @member {protocol.TMPing.pingType} type
             * @memberof protocol.TMPing
             * @instance
             */
            TMPing.prototype.type = 0;
    
            /**
             * TMPing seq.
             * @member {number} seq
             * @memberof protocol.TMPing
             * @instance
             */
            TMPing.prototype.seq = 0;
    
            /**
             * TMPing pingTime.
             * @member {number|Long} pingTime
             * @memberof protocol.TMPing
             * @instance
             */
            TMPing.prototype.pingTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TMPing netTime.
             * @member {number|Long} netTime
             * @memberof protocol.TMPing
             * @instance
             */
            TMPing.prototype.netTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new TMPing instance using the specified properties.
             * @function create
             * @memberof protocol.TMPing
             * @static
             * @param {protocol.ITMPing=} [properties] Properties to set
             * @returns {protocol.TMPing} TMPing instance
             */
            TMPing.create = function create(properties) {
                return new TMPing(properties);
            };
    
            /**
             * Encodes the specified TMPing message. Does not implicitly {@link protocol.TMPing.verify|verify} messages.
             * @function encode
             * @memberof protocol.TMPing
             * @static
             * @param {protocol.ITMPing} message TMPing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMPing.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.seq != null && message.hasOwnProperty("seq"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.seq);
                if (message.pingTime != null && message.hasOwnProperty("pingTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.pingTime);
                if (message.netTime != null && message.hasOwnProperty("netTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.netTime);
                return writer;
            };
    
            /**
             * Encodes the specified TMPing message, length delimited. Does not implicitly {@link protocol.TMPing.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.TMPing
             * @static
             * @param {protocol.ITMPing} message TMPing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TMPing.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TMPing message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.TMPing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.TMPing} TMPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMPing.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TMPing();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.seq = reader.uint32();
                        break;
                    case 3:
                        message.pingTime = reader.uint64();
                        break;
                    case 4:
                        message.netTime = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TMPing message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.TMPing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.TMPing} TMPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TMPing.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TMPing message.
             * @function verify
             * @memberof protocol.TMPing
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TMPing.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
                if (message.seq != null && message.hasOwnProperty("seq"))
                    if (!$util.isInteger(message.seq))
                        return "seq: integer expected";
                if (message.pingTime != null && message.hasOwnProperty("pingTime"))
                    if (!$util.isInteger(message.pingTime) && !(message.pingTime && $util.isInteger(message.pingTime.low) && $util.isInteger(message.pingTime.high)))
                        return "pingTime: integer|Long expected";
                if (message.netTime != null && message.hasOwnProperty("netTime"))
                    if (!$util.isInteger(message.netTime) && !(message.netTime && $util.isInteger(message.netTime.low) && $util.isInteger(message.netTime.high)))
                        return "netTime: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a TMPing message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.TMPing
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.TMPing} TMPing
             */
            TMPing.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.TMPing)
                    return object;
                var message = new $root.protocol.TMPing();
                switch (object.type) {
                case "ptPING":
                case 0:
                    message.type = 0;
                    break;
                case "ptPONG":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.seq != null)
                    message.seq = object.seq >>> 0;
                if (object.pingTime != null)
                    if ($util.Long)
                        (message.pingTime = $util.Long.fromValue(object.pingTime)).unsigned = true;
                    else if (typeof object.pingTime === "string")
                        message.pingTime = parseInt(object.pingTime, 10);
                    else if (typeof object.pingTime === "number")
                        message.pingTime = object.pingTime;
                    else if (typeof object.pingTime === "object")
                        message.pingTime = new $util.LongBits(object.pingTime.low >>> 0, object.pingTime.high >>> 0).toNumber(true);
                if (object.netTime != null)
                    if ($util.Long)
                        (message.netTime = $util.Long.fromValue(object.netTime)).unsigned = true;
                    else if (typeof object.netTime === "string")
                        message.netTime = parseInt(object.netTime, 10);
                    else if (typeof object.netTime === "number")
                        message.netTime = object.netTime;
                    else if (typeof object.netTime === "object")
                        message.netTime = new $util.LongBits(object.netTime.low >>> 0, object.netTime.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a TMPing message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.TMPing
             * @static
             * @param {protocol.TMPing} message TMPing
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TMPing.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "ptPING" : 0;
                    object.seq = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.pingTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.pingTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.netTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.netTime = options.longs === String ? "0" : 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.protocol.TMPing.pingType[message.type] : message.type;
                if (message.seq != null && message.hasOwnProperty("seq"))
                    object.seq = message.seq;
                if (message.pingTime != null && message.hasOwnProperty("pingTime"))
                    if (typeof message.pingTime === "number")
                        object.pingTime = options.longs === String ? String(message.pingTime) : message.pingTime;
                    else
                        object.pingTime = options.longs === String ? $util.Long.prototype.toString.call(message.pingTime) : options.longs === Number ? new $util.LongBits(message.pingTime.low >>> 0, message.pingTime.high >>> 0).toNumber(true) : message.pingTime;
                if (message.netTime != null && message.hasOwnProperty("netTime"))
                    if (typeof message.netTime === "number")
                        object.netTime = options.longs === String ? String(message.netTime) : message.netTime;
                    else
                        object.netTime = options.longs === String ? $util.Long.prototype.toString.call(message.netTime) : options.longs === Number ? new $util.LongBits(message.netTime.low >>> 0, message.netTime.high >>> 0).toNumber(true) : message.netTime;
                return object;
            };
    
            /**
             * Converts this TMPing to JSON.
             * @function toJSON
             * @memberof protocol.TMPing
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TMPing.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * pingType enum.
             * @name protocol.TMPing.pingType
             * @enum {string}
             * @property {number} ptPING=0 ptPING value
             * @property {number} ptPONG=1 ptPONG value
             */
            TMPing.pingType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ptPING"] = 0;
                values[valuesById[1] = "ptPONG"] = 1;
                return values;
            })();
    
            return TMPing;
        })();
    
        return protocol;
    })();

    return $root;
});
