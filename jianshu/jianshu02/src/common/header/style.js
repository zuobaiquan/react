import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWraper = styled.div`
	position: relative;
	height: 56px;
  border-bottom: 1px solid #f0f0f0;
  display:flex;
  align-items:center;
`;

export const Logo = styled.div`
  position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 100%;
	background: url(${logoPic});
	background-size: 100%;
`;

export const Nav = styled.ul`
  width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
	display:flex;
	align-items:center;
`

export const NavItem = styled.li`
  line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.right {
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`
export const SearchWrapper = styled.li`
  position: relative;
`
export const SearchInput = styled.input.attrs({
	placeholder: '搜索'
})`
	width: ${props => (props.focus ? "320px" : "240px")};
	height: 38px;
	padding: 0 30px 0 20px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	transition: width .5s;
	transition-delay: .1s;
	&::placeholder {
		color: #999;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;
export const SearchIcon = styled.span`
	position: absolute;
	right: 5px;
	bottom: 5px;
	width: 30px;
	line-height: 30px;
	border-radius: 50%;
	text-align: center;
	cursor:pointer;
	.iconfont{
		color:#969696;
	}
	&.focused{
		background:#969696;
		.iconfont{
			color:#fff;
		}
	}
`
export const WriteBook = styled.a`
	position: absolute;
	top: 0;
	right: 0;
	display:flex;
	align-items:center;
	justify-content: center;
	width: 100px;
	height: 100%;
	width: 100px;
	height: 40px;
	border-radius: 20px;
	font-size: 15px;
	margin: 8px 12px 0;
	color: #fff;
	background: #ea6f5a;
	.iconfont{
		font-weight:500;
		font-size:18px;
	}
`
export const SearchInfo = styled.div`
	position: absolute;
	left: 20px;
	top:47px;
	width:240px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
	height:200px;
	border-radius:2px;
`
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;	
`;
export const SearchInfoSwitch = styled.div`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.iconfont{
		font-size: 18px;
    display: inline-block;
    vertical-align: middle;
    margin: -4px 2px 0 0;
	}
`
export const SearchInfoList = styled.ul`
	overflow: hidden;
`
export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;
