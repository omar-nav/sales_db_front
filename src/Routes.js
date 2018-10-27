import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Showall from './components/list/Showall';
import Edit from './components/list/Edit';
import Create from './components/list/Create';
import Show from './components/list/Show';
import Line2017 from './components/linechart/Line2017'
import Line2018 from './components/linechart/Line2018'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Showall} />
            <Route exact path='/showall' component={Showall} />
            <Route exact path='/edit/:id' component={Edit} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/show/:id' component={Show} />
            <Route exact path='/line2017' component={Line2017} />
            <Route exact path='/line2018' component={Line2018} />
        </Switch>
    )
}

export default Routes