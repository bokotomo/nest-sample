import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { DomainJWTClaim, DomainClaim } from '../domain/claim';
import { publicKey } from './jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: publicKey,
    });
  }

  async validate(claim: DomainJWTClaim): Promise<DomainClaim> {
    return { id: claim.sub, email: claim.email, role: claim.role };
  }
}
