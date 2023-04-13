import { Grid } from '@mui/material';
import { strings } from '@sekeron/domain';
import React, { useEffect, useState } from 'react'
import ImageAssets from 'src/assets';
import { MuiButton, MuiStyledButton } from 'src/components/common/button/MuiButton';
import { MuiCheckbox } from 'src/components/common/checkbox/MuiCheckBox';
import { filterTypes } from 'src/core/json/EventJson';
import styles from './FilterCard.module.css';

const FilterCard = ({ handleApplyFilters }: any) => {

    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(JSON.parse(JSON.stringify(filterTypes)))
    }, [])


    const handleChangeFilterType = (index: number) => {

        const selectedFilter = filterData?.map((filter, filterIndex) => {
            if (filterIndex === index) {
                return {
                    ...filter,
                    isFilterSelected: true
                }
            } else {
                return {
                    ...filter,
                    isFilterSelected: false
                }
            }
        })

        setFilterData(selectedFilter)
    }

    const handleChange = (event: any, indexParent: number, indexChild: number) => {
        const selectedFilter = [...filterData]
        selectedFilter[indexParent].eventSubType[indexChild].isSelected = !selectedFilter[indexParent].eventSubType[indexChild].isSelected
        setFilterData(selectedFilter)
    }


    const getCountOfSelectedSubFilter = (eventType: any) => {

        const getCountOfSelectedSubFilter = eventType?.eventSubType?.filter(data => data.isSelected)
        return `(${getCountOfSelectedSubFilter?.length})`
    }


    return (
        <div className={styles['filter-card-container']}  >
            <span className={styles['filter']} >Filters</span>
            <div className={styles['horizontal-divider']} />
            <Grid container flexDirection={'row'} sx={{ p: { xs: '0px', sm: "0px 18px" } }} >
                <Grid item xs={5.5} sm={5.5} md={5.5} lg={5} xl={5.5} className={styles['filter-types']}>
                    {filterData?.map((type, index) => {
                        return (
                            <span key={index} className={type?.isFilterSelected ? styles['active-filter-type-name'] : styles['filter-type-name']} onClick={() => handleChangeFilterType(index)} >{type.name} {getCountOfSelectedSubFilter(type)}</span>
                        )
                    })}
                </Grid>
                <Grid item xs={6.5} sm={6.5} md={6.5} lg={6.5} xl={6.5} className={styles['filter-details']}>
                    {filterData?.map((type, index) => {
                        if (type?.isFilterSelected) {
                            return type?.eventSubType?.map((subFilter, subFilterIndex) => {
                                return (
                                    <div key={subFilterIndex} className={styles['sub-filter-detail']}>
                                        <MuiCheckbox
                                            uncheckedIcon={ImageAssets.ic_white_unchecked}
                                            checkedicon={ImageAssets.ic_checkbox_checked}
                                            checked={subFilter?.isSelected}
                                            label={subFilter.name}
                                            sx={{ fontFamily: 'Comfortaa-Light', fontSize: '2rem' }}
                                            onChange={(e: any) => handleChange(e, index, subFilterIndex)}
                                        />
                                    </div>
                                )
                            })
                        }
                    })}
                </Grid>
            </Grid>
            <div className={styles['horizontal-divider']} />
            <Grid container flexDirection={'row'} gap={3} justifyContent={'center'} sx={{ p: '15px 0px' }} >
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <MuiButton className={styles["clear-all"]} onClick={() => {
                        setFilterData(JSON.parse(JSON.stringify(filterTypes)))
                    }} >{strings.clearAll}</MuiButton>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <MuiStyledButton sx={{ textTransform: 'capitalize' }} onClick={handleApplyFilters} >{strings.applyFilters}</MuiStyledButton>
                </Grid>
            </Grid>

        </div>
    )
}

export default FilterCard
