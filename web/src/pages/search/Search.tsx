import { Grid, Stack } from '@mui/material';
import { SearchTabEnums, SearchTabEnumUtils, strings } from '@sekeron/domain';
import { searchRedux } from '@sekeron/domain/dist/redux/search-redux/SearchRedux';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SearchBar, SearchBarWithAutoComplete } from 'src/components/common/search-bar/SearchBar';
import routesNames from 'src/routes/RouteNames';
import styles from './Search.module.css';

const Search = () => {

    const navigate = useNavigate();

    const actionDispatch = ((dispatch: any) => ({
        setSearchState: (data: any) => dispatch(searchRedux.actions.setSearchState(data)),
    }))

    const { setSearchState } = actionDispatch(useDispatch())

    const handleClickOnSearchFilter = (value: string) => {
        setSearchState({ key: 'searchKey', value: value })
        switch (value) {
            case SearchTabEnums.bestOfSekeron:
                return navigate(routesNames.explore, { state: { tabValue: 0 } })

            case SearchTabEnums.posts:
                return navigate(routesNames.explore, { state: { tabValue: 1 } })

            case SearchTabEnums.projects:
                return navigate(routesNames.explore, { state: { tabValue: 2 } })

            case SearchTabEnums.profile:
                return navigate(routesNames.explore, { state: { tabValue: 3 } })

            case SearchTabEnums.events:
                return navigate(routesNames.explore, { state: { tabValue: 4 } })

            case SearchTabEnums.blogs:
                return navigate(routesNames.explore, { state: { tabValue: 5 } })
        }
    }

    return (
        <div className={styles['search-page-container']} >
            <Stack gap={4} direction={'column'} >
                <div>
                    <SearchBarWithAutoComplete />
                </div>
                <Stack gap={3} direction={'column'} >
                    <div className={styles['filter-by']}>{strings.filterBy}</div>
                    <Grid container >
                        <Grid container gap={{ xs: 2, sm: 3 }} item xs={12} sm={9} md={8} lg={6} xl={4} >
                            {SearchTabEnumUtils?.getSearchTabEnumUtils()?.map((data, dataIndex) => {
                                return (
                                    <span key={dataIndex} className={styles['outlined-names']} onClick={() => handleClickOnSearchFilter(data.name)} >{data.name}</span>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </div>
    )
}

export default Search;