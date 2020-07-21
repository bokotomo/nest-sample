export interface DomainJWTClaim {
  readonly sub: string;
  readonly email: string;
}

export interface DomainClaim {
  readonly id: string;
  readonly email: string;
}

export interface DomainRequest {
  readonly user: DomainClaim;
}
