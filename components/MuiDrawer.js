import { Button, Drawer, Typography, Box } from "@mui/material";
export const MuiDrawer = ({ setIsDrawerOpen, isDrawerOpen }) => {
    return (
        <>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => {
                    setIsDrawerOpen(false);
                }}
            >
                <Box width="250px">
                    <Typography>hi</Typography>
                </Box>
            </Drawer>
        </>
    );
};
