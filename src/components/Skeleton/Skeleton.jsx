/*  eslint-disable */
import React, { Fragment } from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import PropTypes from "prop-types";

const Skeleton_ = (props) => {
	const { loading, variant } = props;
	return (
		<Fragment>
			{loading ? (
				<Fragment>
					<Box alignItems="center" display="flex" width="100%">
						{variant === "card" && (
							<Box margin={2}>
								<Skeleton variant="circle">
									<Avatar />
								</Skeleton>
							</Box>
						)}
						<Box margin={2} width="100%">
							<Skeleton width="100%">
								<Typography>.</Typography>
							</Skeleton>
						</Box>
					</Box>
					<Box margin={2}>
						<Skeleton width="100%">
							<div style={{ padding: "15%" }} />
						</Skeleton>
					</Box>
				</Fragment>
			) : (
				props.children
			)}
		</Fragment>
	);
};

Skeleton_.propTypes = {
	loading: PropTypes.bool.isRequired,
	variant: PropTypes.oneOf(["card", "para"]),
	children: PropTypes.node.isRequired,
};

export default Skeleton_;
