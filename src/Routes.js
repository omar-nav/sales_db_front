import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Edit from './components/list/Edit';
import Create from './components/list/Create';
import Show from './components/list/Show';
import Showall from './components/list/Showall';
import Line from './components/linechart/Line'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/showall' component={Showall} />
            <Route path='/line' component={Line} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
        </Switch>
    )
}

export default Routes