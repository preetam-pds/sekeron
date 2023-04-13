
import React, { Fragment } from 'react';
import { StyledColorPicker, StyledPopper } from './ColorPicker.style'
import { ClickAwayListener, Grow, MenuList, Paper } from '@mui/material';
import { strings } from '@sekeron/domain';

const CustomColorPicker = ({ handleChange, backgroundolor, open, oldBackgroundColor, colorPickerPlacement, handleListKeyDown, handleClose, anchorRef }: any) => {

  return (
    <Fragment>
      <StyledPopper
        open={open}
        anchorEl={anchorRef?.current}
        role={undefined}
        placement={colorPickerPlacement}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  onKeyDown={handleListKeyDown}
                >
                  <div style={{ width: "100%", display: "flex", height: "100%" }} >
                    <StyledColorPicker format="rgba" value={backgroundolor} onChange={handleChange} />
                    <div className="selected-colors-container">
                      <div className="new-color-container" style={{ backgroundColor: backgroundolor }}>
                        <p>{strings.new}</p>
                      </div>
                      <div className="old-color-container" style={{ backgroundColor: oldBackgroundColor }}>
                        <p>{strings.old}</p>
                      </div>
                    </div>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </StyledPopper>
    </Fragment>

  );
}
export default CustomColorPicker


