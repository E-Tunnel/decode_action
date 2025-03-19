//Wed Mar 19 2025 14:36:08 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import { connect } from "cloudflare:sockets";
let a0_0x15056e = "shulng";
let a0_0x548d39 = "25284107-7424-40a5-8396-cdd0623f4f05";
let a0_0x52b73f = [];
let a0_0x4f42a8 = ["https://raw.githubusercontent.com/shulng/shulng/refs/heads/main/ip.txt"];
let a0_0x6f05fb = "ts.hpc.tw:443";
let a0_0x11b79f = "shulng:shulng@188.68.234.53:21440";
let a0_0x2a0882 = "水灵";
export default {
  async fetch(_0xe6fc2b, _0x19cac1) {
    const _0x16b30d = _0xe6fc2b.headers.get("Upgrade");
    const _0x4c75f1 = new URL(_0xe6fc2b.url);
    if (!_0x16b30d || _0x16b30d !== "websocket") {
      {
        if (a0_0x4f42a8.length > 0) {
          {
            a0_0x52b73f = [...new Set((await Promise.all(a0_0x4f42a8.map(async _0x18c9c0 => {
              {
                const _0x48ca89 = await fetch(_0x18c9c0);
                return _0x48ca89.ok ? (await _0x48ca89.text()).split("\n").map(_0x3de7a8 => _0x3de7a8.trim()).filter(_0xd20d59 => _0xd20d59) : [];
              }
            }))).flat())];
          }
        }
        if (_0x4c75f1.pathname === "/" + a0_0x15056e) {
          {
            const _0x4f1728 = _0xe6fc2b.headers.get("User-Agent").toLowerCase();
            const _0xf4a023 = {
              v2ray: a0_0x1a9841,
              clash: a0_0x2a4a22
            };
            const _0x335abd = Object.keys(_0xf4a023).find(_0x374aa3 => _0x4f1728.includes(_0x374aa3));
            const _0x48dad5 = _0xf4a023[_0x335abd];
            return new Response(_0x48dad5(_0xe6fc2b.headers.get("Host")), {
              status: 200,
              headers: {
                "Content-Type": "text/plain;charset=utf-8"
              }
            });
          }
        }
      }
    } else {
      if (_0x16b30d === "websocket") {
        {
          return await a0_0x3629d0(_0xe6fc2b);
        }
      }
    }
  }
};
async function a0_0x3629d0(_0x21aac4) {
  const _0x5a2a22 = new WebSocketPair();
  const [_0x929a05, _0x3a2fe3] = Object.values(_0x5a2a22);
  _0x3a2fe3.accept();
  const _0x373222 = _0x21aac4.headers.get("sec-websocket-protocol");
  const _0x4ee42b = a0_0x41a8ae(_0x373222);
  const {
    TCP接口: _0x5a2ea4,
    写入初始数据: _0x5ced8b
  } = await a0_0xce0405(_0x4ee42b);
  a0_0x2b4ac2(_0x3a2fe3, _0x5a2ea4, _0x5ced8b);
  const _0x50ff01 = {
    status: 101,
    webSocket: _0x929a05
  };
  return new Response(null, _0x50ff01);
}
function a0_0x41a8ae(_0x35bd93) {
  _0x35bd93 = _0x35bd93.replace(/-/g, "+").replace(/_/g, "/");
  const _0x311d38 = atob(_0x35bd93);
  const _0x54cbdd = Uint8Array.from(_0x311d38, _0x24fef7 => _0x24fef7.charCodeAt(0));
  return _0x54cbdd.buffer;
}
async function a0_0xce0405(_0x14bd23, _0x29cd55) {
  if (a0_0x25cd45(new Uint8Array(_0x14bd23.slice(1, 17))) !== a0_0x548d39) {
    {
      return null;
    }
  }
  const _0x4711c8 = new Uint8Array(_0x14bd23)[17];
  const _0x54581b = 18 + _0x4711c8 + 1;
  const _0x586bb9 = _0x14bd23.slice(_0x54581b, _0x54581b + 2);
  const _0x5c7d5e = new DataView(_0x586bb9).getUint16(0);
  const _0x488ea9 = _0x54581b + 2;
  const _0x52ea7f = new Uint8Array(_0x14bd23.slice(_0x488ea9, _0x488ea9 + 1));
  const _0x579b8f = _0x52ea7f[0];
  let _0x187d33 = 0;
  let _0x1fa997 = "";
  let _0x457203 = _0x488ea9 + 1;
  switch (_0x579b8f) {
    case 1:
      _0x187d33 = 4;
      _0x1fa997 = new Uint8Array(_0x14bd23.slice(_0x457203, _0x457203 + _0x187d33)).join(".");
      break;
    case 2:
      _0x187d33 = new Uint8Array(_0x14bd23.slice(_0x457203, _0x457203 + 1))[0];
      _0x457203 += 1;
      _0x1fa997 = new TextDecoder().decode(_0x14bd23.slice(_0x457203, _0x457203 + _0x187d33));
      break;
    case 3:
      _0x187d33 = 16;
      const _0x2fa0d4 = new DataView(_0x14bd23.slice(_0x457203, _0x457203 + _0x187d33));
      const _0x16d52d = [];
      for (let _0x233fa8 = 0; _0x233fa8 < 8; _0x233fa8++) {
        {
          _0x16d52d.push(_0x2fa0d4.getUint16(_0x233fa8 * 2).toString(16));
        }
      }
      _0x1fa997 = _0x16d52d.join(":");
      break;
  }
  const _0x1291ac = _0x14bd23.slice(_0x457203 + _0x187d33);
  {
    try {
      {
        const _0xea189 = {
          hostname: _0x1fa997,
          port: _0x5c7d5e
        };
        _0x29cd55 = await connect(_0xea189);
        await _0x29cd55.opened;
      }
    } catch {
      {
        {
          try {
            _0x29cd55 = await a0_0x4fe855(_0x579b8f, _0x1fa997, _0x5c7d5e);
            await _0x29cd55.opened;
          } catch {
            {
              {
                let [_0x2d3a84, _0x43d08f] = a0_0x6f05fb.split(":");
                _0x29cd55 = await connect({
                  hostname: _0x2d3a84,
                  port: _0x43d08f || _0x5c7d5e
                });
              }
            }
          }
        }
      }
    }
  }
  const _0x562ca7 = {
    "TCP接口": _0x29cd55,
    "写入初始数据": _0x1291ac
  };
  return _0x562ca7;
}
function a0_0x25cd45(_0x1306dc, _0x2b6ab9 = 0) {
  const _0x4f8cd4 = (a0_0x383966[_0x1306dc[_0x2b6ab9 + 0]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 1]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 2]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 3]] + "-" + a0_0x383966[_0x1306dc[_0x2b6ab9 + 4]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 5]] + "-" + a0_0x383966[_0x1306dc[_0x2b6ab9 + 6]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 7]] + "-" + a0_0x383966[_0x1306dc[_0x2b6ab9 + 8]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 9]] + "-" + a0_0x383966[_0x1306dc[_0x2b6ab9 + 10]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 11]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 12]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 13]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 14]] + a0_0x383966[_0x1306dc[_0x2b6ab9 + 15]]).toLowerCase();
  return _0x4f8cd4;
}
const a0_0x383966 = [];
for (let a0_0x251a86 = 0; a0_0x251a86 < 256; ++a0_0x251a86) {
  a0_0x383966.push((a0_0x251a86 + 256).toString(16).slice(1));
}
async function a0_0x2b4ac2(_0xae1baf, _0x10ce61, _0xdb497b) {
  const _0x4308fc = _0x10ce61.writable.getWriter();
  await _0xae1baf.send(new Uint8Array([0, 0]).buffer);
  _0x10ce61.readable.pipeTo(new WritableStream({
    async write(_0x46d905) {
      {
        await _0xae1baf.send(_0x46d905);
      }
    }
  }));
  const _0x330576 = new ReadableStream({
    async start(_0x1acb9a) {
      {
        if (_0xdb497b) {
          {
            _0x1acb9a.enqueue(_0xdb497b);
            _0xdb497b = null;
          }
        }
        _0xae1baf.addEventListener("message", _0x541963 => {
          _0x1acb9a.enqueue(_0x541963.data);
        });
        _0xae1baf.addEventListener("close", () => {
          _0x1acb9a.close();
        });
        _0xae1baf.addEventListener("error", () => {
          _0x1acb9a.close();
        });
      }
    }
  });
  _0x330576.pipeTo(new WritableStream({
    async write(_0x1c6466) {
      {
        await _0x4308fc.write(_0x1c6466);
      }
    }
  }));
}
async function a0_0x4fe855(_0xf3dae0, _0x3e3938, _0x27f144) {
  const {
    username: _0x432152,
    password: _0x264f36,
    hostname: _0xaccebb,
    port: _0x509039
  } = await a0_0x348e7c(a0_0x11b79f);
  const _0x18b0b9 = {
    hostname: _0xaccebb,
    port: _0x509039
  };
  const _0x111ba9 = connect(_0x18b0b9);
  try {
    await _0x111ba9.opened;
  } catch {
    const _0x4c7903 = {
      status: 400
    };
    return new Response("SOCKS5未连通", _0x4c7903);
  }
  const _0x1e049c = _0x111ba9.writable.getWriter();
  const _0x48d157 = _0x111ba9.readable.getReader();
  const _0x201811 = new TextEncoder();
  const _0x5c37f1 = new Uint8Array([5, 2, 0, 2]);
  await _0x1e049c.write(_0x5c37f1);
  let _0x4bab75 = (await _0x48d157.read()).value;
  if (_0x4bab75[1] === 2) {
    if (!_0x432152 || !_0x264f36) {
      return _0x51278e();
    }
    const _0x4535ec = new Uint8Array([1, _0x432152.length, ..._0x201811.encode(_0x432152), _0x264f36.length, ..._0x201811.encode(_0x264f36)]);
    await _0x1e049c.write(_0x4535ec);
    _0x4bab75 = (await _0x48d157.read()).value;
    if (_0x4bab75[0] !== 1 || _0x4bab75[1] !== 0) {
      return _0x51278e();
    }
  }
  let _0x36ef11;
  switch (_0xf3dae0) {
    case 1:
      _0x36ef11 = new Uint8Array([1, ..._0x3e3938.split(".").map(Number)]);
      break;
    case 2:
      _0x36ef11 = new Uint8Array([3, _0x3e3938.length, ..._0x201811.encode(_0x3e3938)]);
      break;
    case 3:
      _0x36ef11 = new Uint8Array([4, ..._0x3e3938.split(":").flatMap(_0xe4e195 => [parseInt(_0xe4e195.slice(0, 2), 16), parseInt(_0xe4e195.slice(2), 16)])]);
      break;
    default:
      return _0x51278e();
  }
  const _0x2a869b = new Uint8Array([5, 1, 0, ..._0x36ef11, _0x27f144 >> 8, _0x27f144 & 255]);
  await _0x1e049c.write(_0x2a869b);
  _0x4bab75 = (await _0x48d157.read()).value;
  if (_0x4bab75[0] !== 5 || _0x4bab75[1] !== 0) {
    return _0x51278e();
  }
  _0x1e049c.releaseLock();
  _0x48d157.releaseLock();
  return _0x111ba9;
  function _0x51278e() {
    _0x1e049c.releaseLock();
    _0x48d157.releaseLock();
    _0x111ba9.close();
    const _0x5a15f7 = {
      status: 400
    };
    return new Response("SOCKS5握手失败", _0x5a15f7);
  }
}
async function a0_0x348e7c(_0x369f0a) {
  const [_0x2238c4, _0xe23917] = _0x369f0a.split("@").reverse();
  let _0xd63a8f;
  let _0x325115;
  let _0x52f193;
  let _0x4f05e9;
  if (_0xe23917) {
    const _0x1cb02a = _0xe23917.split(":");
    _0xd63a8f = _0x1cb02a[0];
    _0x325115 = _0x1cb02a[1];
  }
  const _0x8f4679 = _0x2238c4.split(":");
  _0x4f05e9 = Number(_0x8f4679.pop());
  _0x52f193 = _0x8f4679.join(":");
  const _0x11fc56 = {
    username: _0xd63a8f,
    password: _0x325115,
    hostname: _0x52f193,
    port: _0x4f05e9
  };
  return _0x11fc56;
}
let a0_0x1f6a06 = "vl";
let a0_0x27dfe9 = "ess";
let a0_0x5ad863 = "://";
function a0_0x1a9841(_0x13fce6) {
  a0_0x52b73f.length === 0 && (a0_0x52b73f = [_0x13fce6 + ":443"]);
  return a0_0x52b73f.map(_0x42637d => {
    const [_0x1ea6ce, _0x4cdcbf] = _0x42637d.split("@");
    const [_0x5c0d51, _0x4f24da = a0_0x2a0882] = _0x1ea6ce.split("#");
    const _0x3540f1 = _0x5c0d51.split(":");
    const _0xe84f33 = _0x3540f1.length > 1 ? Number(_0x3540f1.pop()) : 443;
    const _0x2d7698 = _0x3540f1.join(":");
    const _0x35ab55 = _0x4cdcbf === "notls" ? "security=none" : "security=tls";
    return "" + a0_0x1f6a06 + a0_0x27dfe9 + a0_0x5ad863 + a0_0x548d39 + "@" + _0x2d7698 + ":" + _0xe84f33 + "?encryption=none&" + _0x35ab55 + "&sni=" + _0x13fce6 + "&type=ws&host=" + _0x13fce6 + "&path=%2F%3Fed%3D2560#" + _0x4f24da;
  }).join("\n");
}
function a0_0x2a4a22(_0x1ba8ac) {
  a0_0x52b73f.length === 0 && (a0_0x52b73f = [_0x1ba8ac + ":443"]);
  const _0x2b751c = _0x5f5c8d => {
    return _0x5f5c8d.map(_0x10cbce => {
      const [_0x12669f, _0x266376] = _0x10cbce.split("@");
      const [_0x24c6b7, _0x520018 = a0_0x2a0882] = _0x12669f.split("#");
      const _0x4e5a1a = _0x24c6b7.split(":");
      const _0x24f1b4 = _0x4e5a1a.length > 1 ? Number(_0x4e5a1a.pop()) : 443;
      const _0x5b6b10 = _0x4e5a1a.join(":").replace(/^\[|\]/g, "");
      const _0x1b60fd = _0x266376 === "notls" ? "false" : "true";
      const _0x1dab79 = {
        nodeConfig: "  - name: \"" + _0x520018 + "-" + _0x5b6b10 + "-" + _0x24f1b4 + "\"\n    type: " + a0_0x1f6a06 + a0_0x27dfe9 + "\n    server: " + _0x5b6b10 + "\n    port: " + _0x24f1b4 + "\n    uuid: " + a0_0x548d39 + "\n    udp: false\n    tls: " + _0x1b60fd + "\n    network: ws\n    sni: " + _0x1ba8ac + "\n    servername: " + _0x1ba8ac + "\n    ws-opts:\n      path: \"/?ed=2560\"\n      headers:\n        Host: " + _0x1ba8ac,
        proxyConfig: "      - \"" + _0x520018 + "-" + _0x5b6b10 + "-" + _0x24f1b4 + "\""
      };
      return _0x1dab79;
    });
  };
  const _0x5b9040 = _0x2b751c(a0_0x52b73f).map(_0x2476a6 => _0x2476a6.nodeConfig).join("\n");
  const _0xa923f5 = _0x2b751c(a0_0x52b73f).map(_0x9b3dd0 => _0x9b3dd0.proxyConfig).join("\n");
  return "\ngeodata-mode: true\ngeox-url:\n  geoip: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/geoip@release/cn.dat\"\nproxies:\n" + _0x5b9040 + "\nproxy-groups:\n  - name: \"自动选择\"\n    type: fallback\n    url: \"https://www.google.com/generate_204\"\n    interval: 60\n    proxies:\n" + _0xa923f5 + "\nrules:\n  - GEOIP,CN,DIRECT\n  - MATCH,自动选择\n";
}