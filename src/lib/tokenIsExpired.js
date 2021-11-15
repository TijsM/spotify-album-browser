export function tokenIsExpired() {
  const expiryDateAsString = localStorage.getItem("expiry-date");
  const expiryDate = new Date(expiryDateAsString);

  return expiryDate < new Date();
}
