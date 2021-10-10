import { html } from "lit-element";

export const menuIcon = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="33"
    height="20"
    viewBox="0 0 44 31"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="28.199"
        y1="33.742"
        x2="14.028"
        y2="-1.097"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#71d2ec" />
        <stop offset="1" stop-color="#0ac8fa" />
      </linearGradient>
    </defs>
    <g id="menu" transform="translate(-31 -34)">
      <g id="menu-2" data-name="menu">
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="37"
          height="3"
          transform="translate(31 34)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_3"
          data-name="Rectangle 4 copy 3"
          width="3"
          height="3"
          transform="translate(72 34)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_4"
          data-name="Rectangle 4 copy 4"
          width="3"
          height="3"
          transform="translate(31 48)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy"
          data-name="Rectangle 4 copy"
          width="37"
          height="3"
          transform="translate(38 48)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_2"
          data-name="Rectangle 4 copy 2"
          width="17"
          height="3"
          transform="translate(31 62)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_6"
          data-name="Rectangle 4 copy 6"
          width="16"
          height="3"
          transform="translate(59 62)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4_copy_5"
          data-name="Rectangle 4 copy 5"
          width="3"
          height="3"
          transform="translate(52 62)"
          fill="#fff"
        />
      </g>
      <path
        id="Gradient_Overlay"
        data-name="Gradient Overlay"
        d="M59,65V62H75v3Zm-7,0V62h3v3ZM31,65V62H48v3Zm7-14V48H75v3Zm-7,0V48h3v3ZM72,37V34h3v3ZM31,37V34H68v3Z"
        fill="url(#linear-gradient)"
      />
    </g>
  </svg>
`;
export const blueSplash = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="67"
    height="26"
    viewBox="0 0 67 26"
  >
    <defs>
      <pattern
        id="pattern"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 67 26"
      >
        <image
          width="67"
          height="26"
          xlink:href="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <path
      id="Layer_2"
      data-name="Layer 2"
      d="M0,0H67V26H0Z"
      fill="url(#pattern)"
    />
  </svg>
`;
export const notFoundIcon = html`
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 4100 2100"
    style="enable-background:new 0 0 4100 2100;"
    xml:space="preserve"
  >
    <style type="text/css">
      .st0 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #f0f0f0;
      }
      .st1 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #0ac8fa;
      }
      .st2 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #076075;
      }
      .st3 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: url(#SVGID_1_);
      }
      .st4 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #9186dd;
      }
      .st5 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #442f86;
      }
      .st6 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #bbd1f5;
      }
      .st7 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: url(#SVGID_2_);
      }
    </style>
    <g>
      <g>
        <g>
          <path
            class="st0"
            d="M1816.8,852.8h-19.1c-13.1,0-23.7,10.6-23.7,23.7v38.4c0,13.1-10.6,23.7-23.7,23.7h-116.2c-13.1,0-23.7-10.6-23.7-23.7v-38.4c0-13.1-10.6-23.7-23.7-23.7h-212c-13.1,0-23.7-10.6-23.7-23.7V753c0-4.8,1.5-9.5,4.2-13.5l200.9-290.9c4.4-6.4,11.7-10.2,19.5-10.2H1692c18.9,0,30.2,21.1,19.7,36.8l-139.7,210c-10.5,15.7,0.8,36.8,19.7,36.8c13.1,0,23.7-10.6,23.7-23.7v-29.1c0-13.1,10.6-23.7,23.7-23.7h111.2c13.1,0,23.7,10.6,23.7,23.7v29.1c0,13.1,10.6,23.7,23.7,23.7h19.1c13.1,0,23.7,10.6,23.7,23.7v83.4C1840.5,842.1,1829.9,852.8,1816.8,852.8z"
          />
          <path
            class="st0"
            d="M1973,918.8c-34.1-20.7-60.7-50.7-80-90c-19.3-39.3-28.9-86.1-28.9-140.4c0-54.3,9.6-101.1,28.9-140.4c19.3-39.3,46-69.3,80-90c34-20.7,73.2-31.1,117.5-31.1c44.3,0,83.5,10.4,117.5,31.1c34,20.7,60.7,50.7,80,90c19.3,39.3,28.9,86.1,28.9,140.4c0,54.3-9.6,101.1-28.9,140.4c-19.3,39.3-46,69.3-80,90c-34.1,20.7-73.2,31.1-117.5,31.1C2046.2,949.9,2007,939.5,1973,918.8L1973,918.8z M2147.7,688.4L2147.7,688.4c0-84.3-19-126.4-57.1-126.4c-38.1,0-57.2,42.1-57.2,126.4c0,84.3,19,126.4,57.2,126.4C2128.6,814.9,2147.7,772.7,2147.7,688.4z"
          />
          <path
            class="st0"
            d="M2819.8,852.8h-19.1c-13.1,0-23.7,10.6-23.7,23.7v38.4c0,13.1-10.6,23.7-23.7,23.7h-116.2c-13.1,0-23.7-10.6-23.7-23.7v-38.4c0-13.1-10.6-23.7-23.7-23.7h-212c-13.1,0-23.7-10.6-23.7-23.7V753c0-4.8,1.5-9.5,4.2-13.5l200.9-290.9c4.4-6.4,11.7-10.2,19.5-10.2H2695c18.9,0,30.2,21.1,19.7,36.8l-139.7,210c-10.5,15.7,0.8,36.8,19.7,36.8c13.1,0,23.7-10.6,23.7-23.7v-29.1c0-13.1,10.6-23.7,23.7-23.7h111.2c13.1,0,23.7,10.6,23.7,23.7v29.1c0,13.1,10.6,23.7,23.7,23.7h19.1c13.1,0,23.7,10.6,23.7,23.7v83.4C2843.4,842.1,2832.8,852.8,2819.8,852.8z"
          />
        </g>
        <g>
          <path
            class="st1"
            d="M1800.2,850.2h-19.1c-13.1,0-23.7,10.6-23.7,23.7v38.4c0,13.1-10.6,23.7-23.7,23.7h-116.2c-13.1,0-23.7-10.6-23.7-23.7v-38.4c0-13.1-10.6-23.7-23.7-23.7h-212c-13.1,0-23.7-10.6-23.7-23.7v-76.1c0-4.8,1.5-9.5,4.2-13.5l200.9-290.9c4.4-6.4,11.7-10.2,19.5-10.2h116.3c18.9,0,30.2,21.1,19.7,36.8l-139.7,210c-10.5,15.7,0.8,36.8,19.7,36.8c13.1,0,23.7-10.6,23.7-23.7v-29.1c0-13.1,10.6-23.7,23.7-23.7h111.2c13.1,0,23.7,10.6,23.7,23.7v29.1c0,13.1,10.6,23.7,23.7,23.7h19.1c13.1,0,23.7,10.6,23.7,23.7v83.4C1823.9,839.6,1813.3,850.2,1800.2,850.2z"
          />
          <path
            class="st1"
            d="M1956.4,916.3c-34.1-20.7-60.7-50.7-80-90c-19.3-39.3-28.9-86.1-28.9-140.4c0-54.3,9.6-101.1,28.9-140.4c19.3-39.3,46-69.3,80-90c34-20.7,73.2-31.1,117.5-31.1c44.3,0,83.5,10.4,117.5,31.1c34,20.7,60.7,50.7,80,90c19.3,39.3,28.9,86.1,28.9,140.4c0,54.3-9.6,101.1-28.9,140.4c-19.3,39.3-46,69.3-80,90c-34.1,20.7-73.2,31.1-117.5,31.1C2029.6,947.4,1990.5,937,1956.4,916.3L1956.4,916.3z M2131.1,685.9L2131.1,685.9c0-84.3-19-126.4-57.1-126.4c-38.1,0-57.2,42.1-57.2,126.4c0,84.3,19,126.4,57.2,126.4C2112,812.3,2131.1,770.2,2131.1,685.9z"
          />
          <path
            class="st1"
            d="M2803.2,850.2h-19.1c-13.1,0-23.7,10.6-23.7,23.7v38.4c0,13.1-10.6,23.7-23.7,23.7h-116.2c-13.1,0-23.7-10.6-23.7-23.7v-38.4c0-13.1-10.6-23.7-23.7-23.7h-212c-13.1,0-23.7-10.6-23.7-23.7v-76.1c0-4.8,1.5-9.5,4.2-13.5l200.9-290.9c4.4-6.4,11.7-10.2,19.5-10.2h116.3c18.9,0,30.2,21.1,19.7,36.8l-139.7,210c-10.5,15.7,0.8,36.8,19.7,36.8c13.1,0,23.7-10.6,23.7-23.7v-29.1c0-13.1,10.6-23.7,23.7-23.7h111.2c13.1,0,23.7,10.6,23.7,23.7v29.1c0,13.1,10.6,23.7,23.7,23.7h19.1c13.1,0,23.7,10.6,23.7,23.7v83.4C2826.9,839.6,2816.3,850.2,2803.2,850.2z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            class="st2"
            d="M967.7,1244.7c73.3,0,133.8-23.5,183.7-70.9c59.6-56.7,94.1-137.3,127.5-215.3c37.7-88.1,73.3-171.4,138.4-192.2c28.7-9.2,54.7-6.1,79.7,9.4c109.8,68.3,151.4,340.3,151.8,343l37.1-5.5c-1.8-11.9-44.7-291.9-169.1-369.3c-34.4-21.4-71.7-25.9-110.9-13.3c-81.4,26-120.3,116.9-161.4,213.2c-64,149.5-130.1,304.1-360.4,253.6l-111.4-36c-9.9-3.2-20.4,2.2-23.6,12.1c-3.2,9.9,2.2,20.4,12.1,23.6l114,36.8C908,1241.1,938.8,1244.7,967.7,1244.7z"
          />
        </g>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="1849.8013"
          y1="1204.4611"
          x2="1548.8699"
          y2="1273.9365"
        >
          <stop offset="0" style="stop-color:#60B0E2" />
          <stop offset="1" style="stop-color:#916EB0" />
        </linearGradient>
        <path
          class="st3"
          d="M1601.5,1429.9l-39.9-193.5c-13.8-66.8,25.1-133.2,90.2-153.9c72.7-23.1,150,19.5,169.3,93.3l49,187.7L1601.5,1429.9z"
        />
        <ellipse
          transform="matrix(-0.9722 0.2342 -0.2342 -0.9722 3755.0674 2358.7136)"
          class="st4"
          cx="1737.5"
          cy="1402.3"
          rx="139.8"
          ry="33.2"
        />
        <ellipse
          transform="matrix(-0.9843 -0.1767 0.1767 -0.9843 3305.9365 3068.8079)"
          class="st5"
          cx="1789.6"
          cy="1387.2"
          rx="26.4"
          ry="11.1"
        />
        <ellipse
          transform="matrix(-0.9843 -0.1767 0.1767 -0.9843 3113.0195 3109.6943)"
          class="st5"
          cx="1695"
          cy="1416.2"
          rx="26.4"
          ry="11.1"
        />
        <path
          class="st6"
          d="M1721.7,1105.2c0,0,57.9,21.1,76.3,81.6c18.4,60.5,34.2,138.2,34.2,138.2l-52.6,1.3L1721.7,1105.2z"
        />
        <polygon
          class="st2"
          points="1670.7,1036.6 1642.8,1085.5 1679.6,1076.9 		"
        />
      </g>
      <g>
        <g>
          <path
            class="st2"
            d="M3360.2,985.5l-14.9,33.1c-2.6-1.2-64.2-29.7-120.7-130.3c-16.3-29.1-41.4-63.1-68-60c-19.1,2.3-69.7,29.3-127.2,231.8c-62.7,220.8-196.9,365-398.7,428.7c-130.6,41.2-292.2-46.8-299-50.6l17.6-31.8c2,1.1,155,84.1,270.5,47.7c189.5-59.8,315.5-195.7,374.7-404c47.3-166.6,99-251,157.9-257.9c37.3-4.4,72.3,21.9,103.9,78.3C3307,960.8,3359.7,985.3,3360.2,985.5L3360.2,985.5z M2349.3,1406.5C2349.3,1406.5,2349.3,1406.5,2349.3,1406.5l-8.8,15.9L2349.3,1406.5L2349.3,1406.5z"
          />
        </g>
        <g>
          <path
            class="st2"
            d="M2012,1274.3l95.7,69.4c8,5.8,9.8,17,4,25c-5.8,8-17,9.8-25,4l-95.7-69.4c-8-5.8-9.8-17-4-25C1992.8,1270.2,2004,1268.5,2012,1274.3z"
          />
        </g>
        <g>
          <path
            class="st2"
            d="M2085.9,1168l95.7,69.4c8,5.8,9.8,17,4,25c-5.8,8-17,9.8-25,4l-95.7-69.4c-8-5.8-9.8-17-4-25C2066.7,1164,2077.9,1162.2,2085.9,1168z"
          />
        </g>
        <polygon
          class="st2"
          points="2420.9,1444.1 2361.5,1452.9 2377.9,1419.8 2434.1,1441.9 		"
        />
        <linearGradient
          id="SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1="2163.7832"
          y1="1491.4574"
          x2="2299.303"
          y2="1138.416"
        >
          <stop offset="0" style="stop-color:#60B0E2" />
          <stop offset="1" style="stop-color:#916EB0" />
        </linearGradient>
        <path
          class="st7"
          d="M2019.3,1373.5l165.6,107.7c57.2,37.2,133.2,25.2,176.2-27.9c48-59.3,36.5-146.8-25.2-191.7l-156.9-114L2019.3,1373.5z"
        />
        <path
          class="st6"
          d="M2074.8,1381.4l38.1-51.6l195.6,140.9c0,0-46.9,23.4-100.9-2.9C2153.8,1441.6,2074.8,1381.4,2074.8,1381.4z"
        />
      </g>
      <g>
        <path
          class="st1"
          d="M1492.6,1709c21.6,0,32.1-10.8,32.1-23.4c0-27.8-44-18.1-44-32.1c0-4.8,4-8.7,14.4-8.7c6.7,0,13.9,1.9,21,5.9l5.4-13.3c-7-4.4-16.7-6.7-26.2-6.7c-21.5,0-31.9,10.7-31.9,23.6c0,28.1,44,18.4,44,32.5c0,4.6-4.2,8.1-14.6,8.1c-9.1,0-18.6-3.2-24.9-7.9l-5.9,13.2C1468.5,1705.5,1480.6,1709,1492.6,1709z"
        />
        <path
          class="st1"
          d="M1563.2,1708.6c18.5,0,31.9-12.4,31.9-29.9c0-17.5-13.4-29.9-31.9-29.9c-18.5,0-32,12.4-32,29.9C1531.2,1696.2,1544.7,1708.6,1563.2,1708.6L1563.2,1708.6z M1563.2,1694.8c-8.4,0-14.9-6-14.9-16.1c0-10,6.5-16.1,14.9-16.1c8.4,0,14.8,6,14.8,16.1C1578,1688.7,1571.6,1694.8,1563.2,1694.8z"
        />
        <path
          class="st1"
          d="M1622.3,1657.3v-7.7h-16.1v58.1h16.8v-27.4c0-11.1,6.2-16.2,15.4-16.2c1.3,0,2.4,0.1,3.8,0.2v-15.6C1633.4,1648.8,1626.5,1651.7,1622.3,1657.3z"
        />
        <path
          class="st1"
          d="M1668.5,1657.3v-7.7h-16.1v58.1h16.8v-27.4c0-11.1,6.2-16.2,15.4-16.2c1.3,0,2.4,0.1,3.8,0.2v-15.6C1679.5,1648.8,1672.6,1651.7,1668.5,1657.3z"
        />
        <path
          class="st1"
          d="M1742,1649.6l-16.4,39.4l-16.3-39.4h-17.4l25.2,58.5l-0.2,0.5c-2.3,5.2-4.9,7.2-9.5,7.2c-3.3,0-6.9-1.4-9.5-3.7l-6.2,12c3.8,3.3,10.3,5.3,16.2,5.3c10.5,0,18.5-4.2,24.1-18.3l26.2-61.7H1742z"
        />
        <path
          class="st1"
          d="M1768.2,1687.7c-5.9,0-10.5,4.1-10.5,10.4c0,4.4,2.3,7.8,5.8,9.2l-4.8,17.2h10.7l6.2-15.6c2.5-5.9,2.9-8,2.9-10.8C1778.5,1691.9,1774.2,1687.7,1768.2,1687.7z"
        />
        <path
          class="st1"
          d="M1854.5,1632.1h-32.7v75.6h17.5v-20.8h15.2c20.2,0,32.8-10.5,32.8-27.3C1887.3,1642.6,1874.7,1632.1,1854.5,1632.1L1854.5,1632.1z M1853.5,1672.6h-14.3v-26.2h14.3c10.7,0,16.1,4.9,16.1,13.2C1869.6,1667.8,1864.2,1672.6,1853.5,1672.6z"
        />
        <path
          class="st1"
          d="M1921.4,1648.8c-9.3,0-18.7,2.5-25.1,7l6,11.8c4.2-3.3,10.6-5.4,16.7-5.4c9.1,0,13.4,4.2,13.4,11.4h-13.4c-17.7,0-24.9,7.1-24.9,17.4c0,10,8.1,17.6,21.7,17.6c8.5,0,14.6-2.8,17.7-8.1v7.2h15.8v-33.2C1949.4,1657,1939.1,1648.8,1921.4,1648.8L1921.4,1648.8z M1920.1,1697.3c-5.9,0-9.5-2.8-9.5-7c0-3.9,2.5-6.8,10.4-6.8h11.6v5.9C1930.6,1694.7,1925.7,1697.3,1920.1,1697.3z"
        />
        <path
          class="st1"
          d="M2009.2,1649.6v7.5c-4.4-5.6-11.1-8.3-19.2-8.3c-16.1,0-29.1,11.1-29.1,28.1c0,17,13,28.1,29.1,28.1c7.6,0,13.9-2.4,18.4-7.2v2.5c0,10.5-5.2,15.9-17.1,15.9c-7.5,0-15.6-2.6-20.5-6.6l-6.7,12.1c6.8,5.3,17.5,8,28.5,8c21,0,32.6-9.9,32.6-31.5v-48.4H2009.2L2009.2,1649.6z M1993.4,1691.1c-8.9,0-15.3-5.7-15.3-14.3c0-8.5,6.5-14.3,15.3-14.3c8.9,0,15.2,5.7,15.2,14.3C2008.6,1685.4,2002.2,1691.1,1993.4,1691.1z"
        />
        <path
          class="st1"
          d="M2097.8,1678.9c0-18.7-13.2-30.1-30.2-30.1c-17.7,0-31,12.5-31,29.9c0,17.3,13.1,29.9,33.2,29.9c10.5,0,18.6-3.2,24-9.4l-9-9.7c-4,3.8-8.4,5.6-14.6,5.6c-8.9,0-15-4.4-16.6-11.7h44C2097.6,1682,2097.8,1680.2,2097.8,1678.9L2097.8,1678.9z M2067.7,1661.5c7.6,0,13.1,4.8,14.3,12.1h-28.6C2054.5,1666.2,2060,1661.5,2067.7,1661.5z"
        />
        <polygon
          class="st1"
          points="2192.8,1632.1 2192.8,1678 2155.3,1632.1 2140.8,1632.1 2140.8,1707.7 2158.1,1707.7 2158.1,1661.8 2195.8,1707.7 2210.1,1707.7 2210.1,1632.1 		"
        />
        <path
          class="st1"
          d="M2254.5,1708.6c18.5,0,31.9-12.4,31.9-29.9c0-17.5-13.4-29.9-31.9-29.9s-32,12.4-32,29.9C2222.5,1696.2,2236,1708.6,2254.5,1708.6L2254.5,1708.6z M2254.5,1694.8c-8.4,0-14.9-6-14.9-16.1c0-10,6.5-16.1,14.9-16.1s14.8,6,14.8,16.1C2269.3,1688.7,2262.9,1694.8,2254.5,1694.8z"
        />
        <path
          class="st1"
          d="M2330.5,1693.1c-1.8,1.4-4.3,2.2-6.8,2.2c-4.5,0-7.2-2.7-7.2-7.7v-23.7h14.5v-13h-14.5v-14.1h-16.8v14.1h-9v13h9v23.9c0,13.8,8,20.8,21.7,20.8c5.2,0,10.3-1.2,13.7-3.7L2330.5,1693.1z"
        />
        <polygon
          class="st1"
          points="2433.5,1646.2 2433.5,1632.1 2376.3,1632.1 2376.3,1707.7 2393.8,1707.7 2393.8,1680.2 2428.8,1680.2 2428.8,1666.2 2393.8,1666.2 2393.8,1646.2 		"
        />
        <path
          class="st1"
          d="M2470.3,1708.6c18.5,0,31.9-12.4,31.9-29.9c0-17.5-13.4-29.9-31.9-29.9c-18.5,0-32,12.4-32,29.9C2438.3,1696.2,2451.8,1708.6,2470.3,1708.6L2470.3,1708.6z M2470.3,1694.8c-8.4,0-14.9-6-14.9-16.1c0-10,6.5-16.1,14.9-16.1c8.4,0,14.8,6,14.8,16.1C2485.1,1688.7,2478.7,1694.8,2470.3,1694.8z"
        />
        <path
          class="st1"
          d="M2555.1,1649.6v28.7c0,10.7-5.6,15.7-13.4,15.7c-7.5,0-11.8-4.3-11.8-14v-30.3h-16.8v32.8c0,17.9,10.3,26.1,24.8,26.1c7.1,0,13.6-2.7,18-7.8v6.9h16v-58.1H2555.1z"
        />
        <path
          class="st1"
          d="M2622.9,1648.8c-7.9,0-14.7,2.7-19.2,7.7v-6.8h-16.1v58.1h16.8V1679c0-10.7,5.8-15.7,13.9-15.7c7.5,0,11.8,4.3,11.8,13.7v30.7h16.8v-33.3C2647,1656.8,2636.6,1648.8,2622.9,1648.8z"
        />
        <path
          class="st1"
          d="M2705.2,1627.6v28.2c-4.2-4.8-10.3-7-17.4-7c-16.4,0-29.1,11.7-29.1,29.9c0,18.3,12.6,29.9,29.1,29.9c7.8,0,13.9-2.5,18.1-7.6v6.7h16.1v-80.1H2705.2L2705.2,1627.6z M2690.7,1694.8c-8.4,0-14.9-6-14.9-16.1c0-10,6.5-16.1,14.9-16.1c8.3,0,14.8,6,14.8,16.1C2705.5,1688.7,2699.1,1694.8,2690.7,1694.8z"
        />
      </g>
    </g>
  </svg>
`;
