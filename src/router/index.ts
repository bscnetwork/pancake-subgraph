/* eslint-disable prefer-const */
import { BigInt } from "@graphprotocol/graph-ts";
import { Router } from "../../generated/schema";
import { AddLiquidityETHCall } from "../../generated/Router/Router";

export function handleAddLiquidityETH(call: AddLiquidityETHCall): void {
  let id = call.transaction.hash.toHex()
  let transaction = new Router(id)
  transaction.tokenAddress = call.inputs.token.toHex()
  transaction.targetAddress = call.inputs.to.toHex()
  transaction.amountTokenDesired = call.inputs.amountTokenDesired
  transaction.amountTokenMin = call.inputs.amountTokenMin
  transaction.amountETHMin = call.inputs.amountETHMin
  transaction.save()
}