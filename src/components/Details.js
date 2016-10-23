import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import { connect } from 'react-redux';

import { fetchTeams, fetchTable } from "../actions/competitionsActions";

class Details extends Component {

    componentWillMount() {
        this.props.dispatch(fetchTeams(this.props.params.leagueID));
        this.props.dispatch(fetchTable(this.props.params.leagueID));
    }

    render() {
        const { props: { teams, name, fetched, table, tableFetched } } = this;
        return(
            <div className="center">
                {name} <br /><br />
                <Tabs>
                    <Tab label="Table">
                        <div>
                            {(tableFetched) ?
                            <Table>
                              <TableHeader displaySelectAll={false}>
                                <TableRow >
                                  <TableHeaderColumn>Position</TableHeaderColumn>
                                  <TableHeaderColumn>Team</TableHeaderColumn>
                                  <TableHeaderColumn>Played</TableHeaderColumn>
                                  <TableHeaderColumn>Goals for</TableHeaderColumn>
                                  <TableHeaderColumn>Goals against</TableHeaderColumn>
                                  <TableHeaderColumn>GD</TableHeaderColumn>
                                  <TableHeaderColumn>Points</TableHeaderColumn>
                                </TableRow>
                              </TableHeader>
                              <TableBody displayRowCheckbox={false}>
                                {table.map((item, i) => {
                                    return (
                                      <TableRow key={i}>
                                        <TableRowColumn>{item.position}</TableRowColumn>
                                        <TableRowColumn>{item.teamName}</TableRowColumn>
                                        <TableRowColumn>{item.playedGames}</TableRowColumn>
                                        <TableRowColumn>{item.goals}</TableRowColumn>
                                        <TableRowColumn>{item.goalsAgainst}</TableRowColumn>
                                        <TableRowColumn>{item.goalDifference}</TableRowColumn>
                                        <TableRowColumn>{item.points}</TableRowColumn>
                                      </TableRow>
                                    )
                                })}
                              </TableBody>
                            </Table>
                            : <div>Loading</div>}
                        </div>
                    </Tab>
                    <Tab label="Teams" >
                      <div>
                        {(fetched) ? <ul>
                          {teams.map((item) => {
                            return (<li key={item.name+'id'}>
                            {item.name}
                          </li>);
                        })}
                      </ul> : <div>Loading</div>}
                    </div>
                  </Tab>
                </Tabs>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        teams: state.teams.teams,
        fetched: state.teams.fetched,
        name: state.competitions.competitionName,
        table: state.table.table,
        tableFetched: state.table.fetched,
    };
}

export default connect(mapStateToProps)(Details);
