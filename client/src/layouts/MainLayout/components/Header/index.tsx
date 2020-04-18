/* eslint-disable no-duplicate-imports */
/**
* App Header
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import screenfull, { Screenfull } from "screenfull";
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter, Link } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

// actions
import { collapsedSidebarAction } from '../../../../actions/settings';

// helpers
import { getAppLayout } from "../../helpers/helpers";

// components
import SearchForm from '../SearchForm';
import Notifications from '../Notifications';
// import QuickLinks from './QuickLinks';
import MobileSearchForm from '../MobileSearchForm';
// import Cart from './Cart';

// intl messages
// import IntlMessages from 'Util/IntlMessages';

interface Props {
  collapsedSidebarAction?: any,
  agencyMenu: any,
  navCollapsed: any,
  horizontalMenu: boolean,
  location: any
}

interface State {
  customizer: boolean,
  isMobileSearchFormVisible: boolean,
}

type PropsType = RouteComponentProps

class Header extends Component<Props & PropsType, State> {

  state = {
    customizer: false,
    isMobileSearchFormVisible: false
  }

  // function to change the state of collapsed sidebar
  onToggleNavCollapsed = (event: any) => {
    const val = !this.props.navCollapsed;
    this.props.collapsedSidebarAction(val);
  }

  // open dashboard overlay
  openDashboardOverlay(e: any) {
    var el = document.getElementsByClassName('dashboard-overlay')[0];
    el.classList.toggle("d-none");
    el.classList.toggle("show");
    if (el.classList.contains('show')) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
    }
    e.preventDefault();
  }

  // close dashboard overlay
  closeDashboardOverlay() {
    var e = document.getElementsByClassName('dashboard-overlay')[0];
    e.classList.remove('show');
    e.classList.add('d-none');
    document.body.style.overflow = "";
  }

  // toggle screen full
  toggleScreenFull() {
    (screenfull as Screenfull).toggle();
  }

  // mobile search form
  openMobileSearchForm() {
    this.setState({ isMobileSearchFormVisible: true });
  }

  render() {
    const { isMobileSearchFormVisible } = this.state;
    const { horizontalMenu, agencyMenu, location } = this.props;

    return (
      <AppBar position="static" className="rct-header">
        <Toolbar className="d-flex justify-content-between w-100 pl-0">
          <div className="d-flex align-items-center">
            {(horizontalMenu || agencyMenu) &&
            <div className="site-logo">
              <Link to="/" className="logo-mini">
                <img src={require('../../../../assets/img/appLogo.png')} className="mr-15" alt="site logo" width="35" height="35" />
              </Link>
              <Link to="/" className="logo-normal">
                <img src={require('../../../../assets/img/appLogoText.png')} className="img-fluid" alt="site-logo" width="67" height="17" />
              </Link>
            </div>
            }
            {!agencyMenu &&
            <ul className="list-inline mb-0 navbar-left">
              {!horizontalMenu ?
                <li className="list-inline-item" onClick={(e) => this.onToggleNavCollapsed(e)}>
                  <Tooltip title="Sidebar Toggle" placement="bottom">
                    <IconButton color="inherit" aria-label="Menu" className="humburger p-0">
                      <MenuIcon />
                    </IconButton>
                  </Tooltip>
                </li> :
                <li className="list-inline-item">
                  <Tooltip title="Sidebar Toggle" placement="bottom">
                    <IconButton color="inherit" aria-label="Menu" className="humburger p-0" component={Link} to="/">
                      <i className="ti-layout-sidebar-left"/>
                    </IconButton>
                  </Tooltip>
                </li>
              }
              {/*{!horizontalMenu && <QuickLinks />}*/}
              <li className="list-inline-item search-icon d-inline-block">
                <SearchForm />
                <IconButton className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
                  <i className="zmdi zmdi-search"/>
                </IconButton>
                <MobileSearchForm
                  isOpen={isMobileSearchFormVisible}
                  onClose={() => this.setState({ isMobileSearchFormVisible: false })}
                />
              </li>
            </ul>
            }
          </div>
          <ul className="navbar-right list-inline mb-0">
            {!horizontalMenu &&
            <li className="list-inline-item">
              <Tooltip title="Upgrade" placement="bottom">
                <Button component={Link} to={`/${getAppLayout(location)}/pages/pricing`} variant="contained" className="upgrade-btn tour-step-4 text-white" color="primary">
                  {/*<IntlMessages id="widgets.upgrade" />*/}
                </Button>
              </Tooltip>
            </li>
            }
            <Notifications />
            <li className="list-inline-item setting-icon">
              <Tooltip title="Chat" placement="bottom">
                <IconButton aria-label="settings" onClick={() => this.setState({ customizer: true })}>
                  <i className="zmdi zmdi-comment"/>
                </IconButton>
              </Tooltip>
            </li>
            <li className="list-inline-item">
              <Tooltip title="Full Screen" placement="bottom">
                <IconButton aria-label="settings" onClick={() => this.toggleScreenFull()}>
                  <i className="zmdi zmdi-crop-free"/>
                </IconButton>
              </Tooltip>
            </li>
          </ul>
        </Toolbar>
        {/*<DashboardOverlay*/}
        {/*  onClose={() => this.closeDashboardOverlay()}*/}
        {/*/>*/}
      </AppBar>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings }:any):any => {
  return { settings };
};


export default withRouter(connect(mapStateToProps, {
  collapsedSidebarAction
})(Header));
