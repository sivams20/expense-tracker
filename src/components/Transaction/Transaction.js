import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpending } from "../../redux/spending/spendingActions";
import styled from "styled-components";
import { formattedDate } from "../../util/utils";
import { useNavigate } from "react-router-dom";

import binIcon from "../../images/delete.png";
import navIcon from "../../images/chevron-right.png";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";

const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
`;

const TransactionItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 15px 5px;
  margin-bottom: 5px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceAction = styled.div`
  display: flex;
  flex-direction: row;
`;

const Price = styled.div`
  margin-top: 10px;
  margin-right: 10px;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Transaction() {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const spendings = useSelector((state) => state.spending.spendings);

  useEffect(() => {
    dispatch(fetchSpending());
  }, [dispatch]);

  const deleteTransaction = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleNo = () => {
    setOpen(false);
  };

  const handleYes = () => {
    setOpen(false);
  };

  return (
    <TransactionContainer>
      {spendings.length > 0 &&
        spendings.map((item) => (
          <TransactionItem key={item._id}>
            <Category>
              <span>{item.note}</span>
              <span>{formattedDate(item.date)}</span>
            </Category>
            <PriceAction>
              <Price>{item.amount}</Price>
              <Action>
                <Icon
                  src={binIcon}
                  alt="delete"
                  onClick={() => deleteTransaction(item._id)}
                />
                <Icon
                  src={navIcon}
                  alt="navigate"
                  onClick={() => {
                    navigate(`/spending/${item._id}`);
                  }}
                />
              </Action>
            </PriceAction>
          </TransactionItem>
        ))}
      <Dialog
        open={open}
        onClose={handleNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete Transaction.?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo}>NO</Button>
          <Button onClick={handleYes} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </TransactionContainer>
  );
}

export default Transaction;
