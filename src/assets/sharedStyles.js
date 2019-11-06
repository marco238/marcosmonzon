import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    --app-blue-color: #0AC8FA;
    --app-grey-color: #24262E;
    --nav-bar-width: 70px;
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes falling {
    from { opacity: 0; margin-top: -300px; }
    to { opacity: 1; margin-top: -50px; }
  }

  @keyframes flipIn {
    0% { transform: scaleX(0) }
    70% { transform: scaleX(0) }
    100% { transform: scaleX(1) }
  }
`;