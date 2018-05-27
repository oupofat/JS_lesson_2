def calculate_tip(amount, service):
  if service == "good":
    return amount * 0.2
  elif service == "fair":
    return amount * 0.15
  elif service == "poor":
    return amount * 0.1
amount = input("how much was it?")
service = input("how was the service?(good,fair,poor)")
calculate_tip(amount, service)

function calculateTip(amount,service){
    if (service === "good"){
        return amount * 0.2
    } else if (service === "fair"){
        return amount * 0.15
    } else if (service === "poor"){
        return amount * 0.1
    }
}

let amount = 34.34;
let service = "good";
calculateTip(amount,service);
