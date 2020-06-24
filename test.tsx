import React, {Fragment, FC, useEffect} from "react";
import {useSnackbar} from "notistack";
import {useIntl} from "react-intl";


export const Test: FC = () => {
  const {enqueueSnackbar} = useSnackbar();
  const {formatMessage} = useIntl();

  useEffect(() => {
    enqueueSnackbar(formatMessage({id: "snackbar.error"}), {variant: "error"});
  }, []);

  return <Fragment>test</Fragment>;
};
