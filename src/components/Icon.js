import React from 'react';
import './HomePage.scss';

function Icon({ type, link, target = "_blank" }) {
	return (
		<div className="icon">
			<a href={link} target={target} rel="noopener noreferrer">
				{type === "wordpress"
					?
					<svg className="icon icon-wordpress">
						<use href="#icon-wordpress"></use>
						<symbol id="icon-wordpress" viewBox="0 0 32 32">
							<path d="M4 16c0 4.626 2.76 8.624 6.763 10.518l-5.724-15.274c-0.666 1.453-1.039 3.062-1.039 4.756zM24.101 15.41c0-1.445-0.533-2.445-0.989-3.223-0.608-0.963-1.179-1.778-1.179-2.741 0-1.074 0.836-2.074 2.015-2.074 0.053 0 0.104 0.006 0.155 0.009-2.135-1.905-4.979-3.069-8.103-3.069-4.192 0-7.881 2.095-10.026 5.268 0.282 0.009 0.547 0.014 0.772 0.014 1.255 0 3.198-0.149 3.198-0.149 0.647-0.037 0.723 0.889 0.077 0.963 0 0-0.65 0.074-1.373 0.111l4.37 12.66 2.626-7.671-1.869-4.989c-0.646-0.037-1.259-0.111-1.259-0.111-0.647-0.037-0.571-1 0.076-0.963 0 0 1.981 0.149 3.16 0.149 1.255 0 3.198-0.149 3.198-0.149 0.647-0.037 0.723 0.889 0.076 0.963 0 0-0.651 0.074-1.373 0.111l4.337 12.563 1.197-3.895c0.518-1.617 0.913-2.778 0.913-3.778zM16.211 17.022l-3.601 10.189c1.075 0.308 2.212 0.476 3.39 0.476 1.397 0 2.738-0.235 3.985-0.663-0.032-0.050-0.062-0.103-0.086-0.161l-3.688-9.842zM26.53 10.393c0.052 0.372 0.081 0.771 0.081 1.202 0 1.185-0.228 2.519-0.913 4.186l-3.665 10.321c3.568-2.026 5.967-5.79 5.967-10.102 0-2.032-0.533-3.943-1.47-5.607zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 30c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14z"></path>
						</symbol>
					</svg>
					: null
				}
				{type === "github"
					?
					<svg className="icon icon-github"><use href="#icon-github"></use>
						<symbol id="icon-github" viewBox="0 0.5 32 32">
							<path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
						</symbol>
					</svg>
					: null
				}
				{type === "linkedin"
					?
					<svg className="icon icon-linkedin2"><use href="#icon-linkedin2"></use>
						<symbol id="icon-linkedin2" viewBox="-7 -7 46 46">
							<path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
							<path d="M2 12h6v18h-6v-18z"></path>
							<path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
						</symbol>
					</svg>
					: null
				}
				{type === "email"
					?
					<svg className="icon icon-mail4"><use href="#icon-mail4"></use>
						<symbol id="icon-mail4" viewBox="0 0 32 32">
							<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
						</symbol>
					</svg>
					: null
				}
			</a>
		</div>
	);
}

export default Icon;