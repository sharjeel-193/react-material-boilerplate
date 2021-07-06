/*  eslint-disable */
import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	LinearProgress,
	Button,
} from "@material-ui/core";
import PropTypes from "prop-types";

const ModalDialog = (props) => {
	const { onClose, onSuccess, open, loading, title, variant, children } = props;
	return (
		<Dialog maxWidth={variant} fullWidth open={open} onClose={onClose}>
			{loading && <LinearProgress />}
			{title && <DialogTitle>{title}</DialogTitle>}
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={onSuccess}>
					Ok
				</Button>
				<Button color="primary" onClick={onClose}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
};

ModalDialog.defaultProps = {
	variant: "sm",
};

ModalDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	onSuccess: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	loading: PropTypes.bool,
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
};

export default ModalDialog;
