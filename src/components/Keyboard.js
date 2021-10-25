import { useEffect } from "react";
import ReactTooltip from "react-tooltip";

import "./Keyboard.css";

export default function Keyboard({ binds }) {
  useEffect(() => {
    binds.forEach((bind) => {
      if (!!bind.key.code) {
        const element = document.querySelector(`[data-key="${bind.key.code}"]`);

        element.classList.add("key--binded");
        element.setAttribute(
          "data-tip",
          bind.command.map((command) => command.value).join("; ")
        );
      }
    });
  }, [binds]);

  return (
    <div className="keyboard">
      <ReactTooltip effect="solid" />

      <div className="keyboard__row keyboard__row--h1">
        <div
          data-key="27"
          data-tip=""
          className="key--bottom-left key--word key--disabled"
        >
          <span>esc</span>
        </div>
        <div data-key="112" data-tip="" className="key--fn">
          <span>F1</span>
        </div>
        <div data-key="113" data-tip="" className="key--fn">
          <span>F2</span>
        </div>
        <div data-key="114" data-tip="" className="key--fn">
          <span>F3</span>
        </div>
        <div data-key="115" data-tip="" className="key--fn">
          <span>F4</span>
        </div>
        <div data-key="116" data-tip="" className="key--fn">
          <span>F5</span>
        </div>
        <div data-key="117" data-tip="" className="key--fn">
          <span>F6</span>
        </div>
        <div data-key="118" data-tip="" className="key--fn">
          <span>F7</span>
        </div>
        <div data-key="119" data-tip="" className="key--fn">
          <span>F8</span>
        </div>
        <div data-key="120" data-tip="" className="key--fn">
          <span>F9</span>
        </div>
        <div data-key="121" data-tip="" className="key--fn">
          <span>F10</span>
        </div>
        <div data-key="122" data-tip="" className="key--fn">
          <span>F11</span>
        </div>
        <div data-key="123" data-tip="" className="key--fn">
          <span>F12</span>
        </div>
        <div data-key="n/a" data-tip="" className="key--word key--disabled">
          <span></span>
        </div>
      </div>
      <div className="keyboard__row">
        <div data-key="192" data-tip="" className="key--letter">
          <div>`</div>
        </div>
        <div data-key="49" data-tip="" className="key--letter">
          <div>1</div>
        </div>
        <div data-key="50" data-tip="" className="key--letter">
          <div>2</div>
        </div>
        <div data-key="51" data-tip="" className="key--letter">
          <div>3</div>
        </div>
        <div data-key="52" data-tip="" className="key--letter">
          <div>4</div>
        </div>
        <div data-key="53" data-tip="" className="key--letter">
          <div>5</div>
        </div>
        <div data-key="54" data-tip="" className="key--letter">
          <div>6</div>
        </div>
        <div data-key="55" data-tip="" className="key--letter">
          <div>7</div>
        </div>
        <div data-key="56" data-tip="" className="key--letter">
          <div>8</div>
        </div>
        <div data-key="57" data-tip="" className="key--letter">
          <div>9</div>
        </div>
        <div data-key="48" data-tip="" className="key--letter">
          <div>0</div>
        </div>
        <div data-key="189" data-tip="" className="key--letter">
          <div>-</div>
        </div>
        <div data-key="187" data-tip="" className="key--letter">
          <div>=</div>
        </div>
        <div
          data-key="8"
          data-tip=""
          className="key--bottom-right key--word key--w4 key--disabled"
        >
          <span>delete</span>
        </div>
      </div>
      <div className="keyboard__row">
        <div
          data-key="9"
          data-tip=""
          className="key--bottom-left key--word key--w4 key--disabled"
        >
          <span>tab</span>
        </div>
        <div data-key="81" data-tip="" className="key--letter">
          Q
        </div>
        <div data-key="87" data-tip="" className="key--letter">
          W
        </div>
        <div data-key="69" data-tip="" className="key--letter">
          E
        </div>
        <div data-key="82" data-tip="" className="key--letter">
          R
        </div>
        <div data-key="84" data-tip="" className="key--letter">
          T
        </div>
        <div data-key="89" data-tip="" className="key--letter">
          Y
        </div>
        <div data-key="85" data-tip="" className="key--letter">
          U
        </div>
        <div data-key="73" data-tip="" className="key--letter">
          I
        </div>
        <div data-key="79" data-tip="" className="key--letter">
          O
        </div>
        <div data-key="80" data-tip="" className="key--letter">
          P
        </div>
        <div data-key="219" data-tip="" className="key--letter">
          <div>[</div>
        </div>
        <div data-key="221" data-tip="" className="key--letter">
          <div>]</div>
        </div>
        <div data-key="220" data-tip="" className="key--letter">
          <div>\</div>
        </div>
      </div>
      <div className="keyboard__row">
        <div
          data-key="20"
          data-tip=""
          className="key--bottom-left key--word key--w5 key--disabled"
        >
          <span>caps lock</span>
        </div>
        <div data-key="65" data-tip="" className="key--letter">
          A
        </div>
        <div data-key="83" data-tip="" className="key--letter">
          S
        </div>
        <div data-key="68" data-tip="" className="key--letter">
          D
        </div>
        <div data-key="70" data-tip="" className="key--letter">
          F
        </div>
        <div data-key="71" data-tip="" className="key--letter">
          G
        </div>
        <div data-key="72" data-tip="" className="key--letter">
          H
        </div>
        <div data-key="74" data-tip="" className="key--letter">
          J
        </div>
        <div data-key="75" data-tip="" className="key--letter">
          K
        </div>
        <div data-key="76" data-tip="" className="key--letter">
          L
        </div>
        <div data-key="186" data-tip="" className="key--letter">
          <div>;</div>
        </div>
        <div data-key="222" data-tip="" className="key--letter">
          <div>'</div>
        </div>
        <div
          data-key="13"
          data-tip=""
          className="key--bottom-right key--word key--w5 key--disabled"
        >
          <span>return</span>
        </div>
      </div>
      <div className="keyboard__row">
        <div
          data-key="16"
          data-tip=""
          className="key--bottom-left key--word key--w6"
        >
          <span>shift</span>
        </div>
        <div data-key="90" data-tip="" className="key--letter">
          Z
        </div>
        <div data-key="88" data-tip="" className="key--letter">
          X
        </div>
        <div data-key="67" data-tip="" className="key--letter">
          C
        </div>
        <div data-key="86" data-tip="" className="key--letter">
          V
        </div>
        <div data-key="66" data-tip="" className="key--letter">
          B
        </div>
        <div data-key="78" data-tip="" className="key--letter">
          N
        </div>
        <div data-key="77" data-tip="" className="key--letter">
          M
        </div>
        <div data-key="188" data-tip="" className="key--letter">
          <div>,</div>
        </div>
        <div data-key="190" data-tip="" className="key--letter">
          <div>.</div>
        </div>
        <div data-key="191" data-tip="" className="key--letter">
          <div>/</div>
        </div>
        <div
          className="key--bottom-right key--word key--w6"
          data-key="16-R"
          data-tip=""
        >
          <span>shift</span>
        </div>
      </div>
      <div className="keyboard__row keyboard__row--h3">
        <div className="key--bottom-left key--word key--disabled" data-tip="">
          <span>fn</span>
        </div>
        <div
          data-key="17"
          data-tip=""
          className="key--bottom-left key--word key--w1"
        >
          <span>control</span>
        </div>
        <div
          data-key="18"
          data-tip=""
          className="key--bottom-left key--word key--w1"
        >
          <span>option</span>
        </div>
        <div
          data-key="91"
          data-tip=""
          className="key--bottom-right key--word key--w3"
        >
          <span>command</span>
        </div>
        <div
          data-key="32"
          data-tip=""
          className="key--double key--right key--space"
        >
          &nbsp;
        </div>
        <div
          data-key="93-R"
          data-tip=""
          className="key--bottom-left key--word key--w3"
        >
          <span>command</span>
        </div>
        <div
          data-key="18-R"
          data-tip=""
          className="key--bottom-left key--word key--w1"
        >
          <span>option</span>
        </div>
        <div className="key--arrow key--disabled" data-key="37" data-tip="">
          <span>&#9664;</span>
        </div>
        <div
          data-key="38"
          data-tip=""
          className="key--double key--arrow--tall key--disabled"
        >
          <div>&#9650;</div>
          <div>&#9660;</div>
        </div>
        <div className="key--arrow key--disabled" data-key="39" data-tip="">
          <span>&#9654;</span>
        </div>
      </div>
    </div>
  );
}
